function compareTriplets(a: number[], b: number[]): number[] {
  let score: number[] = [0, 0];

  a.map((value, index) => {
    value > b[index] ? score[0]++ : value < b[index] ? score[1]++ : null;
  });

  return score;
}
