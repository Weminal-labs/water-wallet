/**
 * Returns the URL for a given Algorand network.
 * @param network The name of the Algorand network.
 * @returns The URL of the Algorand network or null if not found.
 */
export function getAlgorandNetworkUrl(network: string): string | null {
  const networkMap: { [key: string]: string } = {
    'mainnet': 'https://mainnet-api.algonode.cloud',
    'testnet': 'https://testnet-api.algonode.cloud',
    'betanet': 'https://betanet-api.algonode.cloud',
    'localnet': 'http://localhost:4001',
  };

  const lowercaseNetwork = network.toLowerCase();
  return networkMap[lowercaseNetwork] || null;
}

/**
 * Returns the URL for the Indexer API for a given Algorand network.
 * @param network The name of the Algorand network.
 * @returns The URL of the Indexer API.
 */
export const getIndexerUrl = (network: string): string => {
  return `https://${network}-idx.algonode.cloud/`;
}

