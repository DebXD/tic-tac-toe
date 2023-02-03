function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(c)
      // if ('x' && 'x' == 'x') same login applies below 
      if (squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) {
        return squares[a];
      }
    }
    return null;
  }

export default calculateWinner;

