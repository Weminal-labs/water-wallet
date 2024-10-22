import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getExplorerUrl } from '@/lib/algorand/network';

interface NFTDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: {
    name: string;
    link: string;
    assetId: string;
    metadata: object;
  };
}

export const NFTDetailModal: React.FC<NFTDetailModalProps> = ({ isOpen, onClose, nft }) => {
  const truncateValue = (value: string | number | undefined, maxLength: number = 20) => {
    if (value === undefined || value === null) return '-';
    const stringValue = String(value);
    if (stringValue.length > maxLength) {
      return stringValue.substring(0, maxLength) + '...';
    }
    return stringValue;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-4">
          <DialogTitle>{nft.metadata?.collectible?.metadata?.name}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-grow px-6">
          <div className="grid gap-4 py-4">
            <img src={nft.metadata?.collectible?.media[0]?.url || ''} alt={nft.name} className="w-full rounded-lg" />
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(`${getExplorerUrl('mainnet')}/asset/${nft.assetId}`, '_blank', 'noopener,noreferrer')}
            >
              VIEW ON EXPLORER
            </Button>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm font-medium text-gray-500">Owner</div>
              <div className="text-sm text-right truncate">{truncateValue(nft.owner)}</div>
              <div className="text-sm font-medium text-gray-500">Asset Id</div>
              <div className="text-sm text-right truncate">{truncateValue(nft.assetId)}</div>
              <div className="text-sm font-medium text-gray-500">Media Type</div>
              <div className="text-sm text-right truncate">{truncateValue(nft.mediaType)}</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <h3 className="text-sm font-medium mr-2">DETAILS</h3>
                <div className="flex-grow h-[1px] bg-gray-200"></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium text-gray-500">Name</div>
                <div className="text-sm text-right">{truncateValue(nft.metadata?.collectible?.metadata?.name, 10)}</div>
                <div className="text-sm font-medium text-gray-500">Description</div>
                <div className="text-sm text-right">{truncateValue(nft.metadata?.collectible?.description)}</div>
                <div className="text-sm font-medium text-gray-500">Link</div>
                <div className="text-sm text-right">{truncateValue(nft.link)}</div>
                <div className="text-sm font-medium text-gray-500">Website</div>
                <div className="text-sm text-right">{truncateValue(nft.website)}</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <h3 className="text-sm font-medium mr-2">ATTRIBUTES</h3>
                <div className="flex-grow h-[1px] bg-gray-200"></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {/* <div className="text-sm font-medium text-gray-500">expiration_timestamp_ms</div>
                <div className="text-sm text-right">{truncateValue(nft.expiration_timestamp_ms)}</div>
                <div className="text-sm font-medium text-gray-500">image_url</div>
                <div className="text-sm text-right">{truncateValue(nft.image_url)}</div> */}
              </div>
            </div>
            {/* <Button className="w-full mt-6">Send NFT</Button> */}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
