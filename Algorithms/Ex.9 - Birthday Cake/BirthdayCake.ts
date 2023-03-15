function birthdayCakeCandles(candles: number[]): number {
  const max:number = Math.max(...candles);
  return candles.filter((value) => (value === max)).length;
}
