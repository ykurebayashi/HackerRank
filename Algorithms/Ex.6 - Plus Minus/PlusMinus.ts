function plusMinus(arr: number[]): void {
  const positiveNumbers =
    arr.filter((element) => element > 0).length / arr.length;
  const negativeNumbers =
    arr.filter((element) => element < 0).length / arr.length;
  const zeros = arr.filter((element) => element === 0).length / arr.length;

  console.log(positiveNumbers.toFixed(6));
  console.log(negativeNumbers.toFixed(6));
  console.log(zeros.toFixed(6));
}
