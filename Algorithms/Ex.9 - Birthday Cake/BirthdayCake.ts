function birthdayCakeCandles(candles: number[]): number {
  const max = Math.max(...candles);
  return candles.filter((value) => (value === max)).length;
}