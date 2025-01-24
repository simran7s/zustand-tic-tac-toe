import { calculateStatus, calculateTurns, calculateWinner } from "../utils/utils"
import Square from "./square"

export default function Board({ xIsNext, squares, onPlay }: 
{ xIsNext: boolean; squares: ('X' | 'O'| null)[]; onPlay: (squares: ('X' | 'O'| null)[]) => void }
) {
    const winner = calculateWinner(squares)
    const turns = calculateTurns(squares)
    const player = xIsNext ? 'X' : 'O'
    const status = calculateStatus(winner, turns, player)
  
    function handleClick(index: number) {
      if (squares[index] || winner) return
      const nextSquares = squares.slice()
      nextSquares[index] = player
      onPlay(nextSquares)
    }
  
    return (
      <>
        <div style={{ marginBottom: '0.5rem' }}>{status}</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            width: 'calc(3 * 2.5rem)',
            height: 'calc(3 * 2.5rem)',
            border: '1px solid #999',
          }}
        >
          {squares.map((square, squareIndex) => (
            <Square
              key={squareIndex}
              value={square}
              onSquareClick={() => handleClick(squareIndex)}
            />
          ))}
        </div>
      </>
    )
  }