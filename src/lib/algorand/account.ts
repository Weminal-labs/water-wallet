import algosdk from 'algosdk';
import { getAlgorandNetworkUrl, getIndexerUrl } from './network';

export const getAccountInfo = async (network: string, address: string) => {
  try {
    const algodClient = new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '');
    const accountInfo = await algodClient.accountInformation(address).do();
    // console.log(accountInfo);

    accountInfo?.assets?.forEach((asset) => {
      getAssetInfo(network, asset.assetId);
    });

    return accountInfo;
  } catch (error) {
    console.error('Error fetching account info:', error);
  }
};

export const getAssetInfo = async (network: string, assetId: number | bigint) => {
  try {
    const algodClient = new algosdk.Algodv2('', getAlgorandNetworkUrl(network) || 'testnet', '');
    const assetInfo = await algodClient.getAssetByID(assetId).do();

    if (assetInfo.params.decimals === 0) {
      const nftInfo = {
        type: 'NFT',
        assetId,
        ...assetInfo
      };
      // console.log('NFT Info:', nftInfo);
      return nftInfo;
    } else {
      // console.log('Asset Info:', assetInfo);
      return { type: 'Asset', ...assetInfo };
    }
  } catch (error) {
    console.error('Error fetching asset/NFT info:', error);
    throw error;
  }
};

export const getAccountTransactions = async (network: string, address: string, limit = 1000) => {
  try {
    const indexerClient = new algosdk.Indexer('', getIndexerUrl(network), '');
    const result = await indexerClient.lookupAccountTransactions(address).limit(limit).do();
    // console.log(result.transactions);
    return result.transactions;
  } catch (error) {
    console.error('Error fetching account transactions:', error);
    throw error;
  }
};
