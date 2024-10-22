export function formatAlgoAmount(microAlgos: number | bigint): string {
  const algos = Number(microAlgos) / 1_000_000
  return algos.toFixed(6) // Display up to 6 decimal places
}

export function formatAddress(address: string): string {
  return address.slice(0, 6) + '...' + address.slice(-4)
}
