export function formatAlgoAmount(microAlgos: number): string {
  const algos = microAlgos / 1_000_000
  return algos.toFixed(6) // Display up to 6 decimal places
}
