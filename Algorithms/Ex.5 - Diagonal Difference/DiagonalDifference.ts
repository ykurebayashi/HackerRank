function diagonalDifference(arr: number[][]): number {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let arrRange = arr.length - 1;

  arr.forEach((el, i) => {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][arrRange - i];
  });

  return Math.abs(firstDiagonal - secondDiagonal);
}
