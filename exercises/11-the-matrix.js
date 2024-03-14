// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = [];
  let counter = 1,
    startRow = 0,
    endRow = n - 1,
    startCol = 0,
    endCol = n - 1;

  //
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  while (startRow <= endRow && startCol <= endCol) {
    // top 1
    for (i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right 2
    for (i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // bottom 3
    for (i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // left 4
    for (i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;

    //
  }

  //
  return result;
}

console.log(matrix(4));
// 1:47:00 / 1:52:52
// https://www.youtube.com/watch?v=ufBbWIyKY2E&t=602s
