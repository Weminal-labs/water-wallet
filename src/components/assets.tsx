import React, { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAccountInfo, getAssetInfo } from '@/lib/algorand/account'
import algosdk from 'algosdk'
import { NFTDetailModal } from '@/components/modal/NFTDetailModal';
import { useAlgorandClient } from '@/contexts/AlgorandClientProvider'

interface NFTInfo extends algosdk.modelsv2.Asset {
  type: string;
  assetId: number | bigint;
  metadata: object;
}

export const Assets = () => {
  const [nfts, setNfts] = useState<NFTInfo[]>([]);
  const [selectedNFT, setSelectedNFT] = useState<NFTInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentAccount } = useAlgorandClient();


  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const network = 'mainnet'; // or 'testnet' depending on your needs

        if (!currentAccount) {
          console.error('No account selected');
          return;
        }

        const accountInfo = await getAccountInfo(network, currentAccount.address);

        if (accountInfo?.assets) {
          const nftPromises = accountInfo.assets.map(asset =>
            getAssetInfo(network, asset.assetId)
          );
          const nftResults = await Promise.all(nftPromises);
          const fetchedNFTs = await Promise.all(nftResults.filter(asset => asset.type === 'NFT').map(async nft => {
            if (nft.params.metadataHash) {
              try {
                const response = await fetch(`https://mainnet.api.perawallet.app/v1/public/assets/${nft.assetId}`, {
                  method: 'GET',
                });
                const data = await response.json();
                console.log("metadata", data)
                return { ...nft, metadata: data };
              } catch (error) {
                console.error('Error fetching metadata:', error);
                return nft;
              }
            }
            return nft;
          }));

          setNfts(fetchedNFTs);
        }
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="p-3 space-y-6 flex flex-col h-full">
      <h2 className="text-2xl font-bold">Assets</h2>
      <div className="grid grid-cols-2 gap-4 flex-grow overflow-auto">
        {nfts.map((nft, index) => (
          <Card
            key={index}
            className="w-full aspect-square p-0 overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => {
              setSelectedNFT(nft)
              setIsModalOpen(true)
              console.log("Im here111")
            }}
          >
            {nft.params.url && (
              <img
                src={nft.metadata.collectible.media[0].url}
                alt={nft.params.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            )}
          </Card>
        ))}
      </div>
      <div className="flex space-x-4 mt-auto pt-4">
        <Button variant="default" className="flex-1">Visual Assets</Button>
        <Button variant="outline" className="flex-1 text-gray-500">Everything Else</Button>
      </div>
      {selectedNFT && (
        <NFTDetailModal
          isOpen={isModalOpen}
          onClose={() => setSelectedNFT(null)}
          nft={{
            name: selectedNFT.params.name || '',
            assetId: selectedNFT.assetId.toString(),
            link: selectedNFT.params.url || '',
            metadata: selectedNFT.metadata || '',
          }}
        />
      )}
    </div>
  )
}
