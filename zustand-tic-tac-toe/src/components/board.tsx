import { useGameStore } from '../store/use-game-store';
import { calculateStatus, calculateTurns, calculateWinner } from '../utils/utils';
import Square from './square';

export default function Board() {
    const xIsNext = useGameStore((state) => state.xIsNext)
    const setXIsNext = useGameStore((state) => state.setXIsNext)
    const squares = useGameStore((state) => state.squares)
    const setSquares = useGameStore((state) => state.setSquares)
    const winner = calculateWinner(squares)
    const turns = calculateTurns(squares)
    const player = xIsNext ? 'X' : 'O'
    const status = calculateStatus(winner, turns, player)

    function handleClick(i) {

        // if square already filled or game won, ignore click
        if (squares[i] || winner) return

        // else update square so it is filled
        const nextSquares = squares.slice()
        nextSquares[i] = player
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
      }

    return (
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
    )
  }