function staircase(n: number): void {
  let tempHash: string = '';
  for( let i = 0; i < n ; i ++) {
      let temp: string = ' '.repeat(n - i - 1);
      tempHash += '#';
      console.log(temp + tempHash)
  }
}