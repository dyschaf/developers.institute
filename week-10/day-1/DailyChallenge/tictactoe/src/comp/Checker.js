const Checker = (squares) => {
  const patterns = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < patterns.length; i++) {
    const [a, b, c] = patterns[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
