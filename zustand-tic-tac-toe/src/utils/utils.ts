function calculateWinner(squares: ('X' | 'O'| null)[]) {
  // All possible winning combinations in tic-tac-toe
   const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6]  // diagonal top-right to bottom-left
];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

function calculateTurns(squares: ('X' | 'O'| null)[]) {
  if(!squares){
    return 0
   }
  return squares.filter((square) => !square).length
}

function calculateStatus(winner: 'X' | 'O' | null, turns: number, player: string) {
  if (!winner && !turns) return 'Draw'
  if (winner) return `Winner ${winner}`
  return `Next player: ${player}`
}

export { calculateWinner, calculateTurns, calculateStatus }