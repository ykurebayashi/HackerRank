function miniMaxSum(arr: number[]): void {
  arr.sort((a, b) => a - b);
  const num:number = arr.length;
  let min:number = arr.slice(0, num - 1).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let max:number = arr.slice(1, num).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(min, max)
}