import { useGameStore } from '../store/use-game-store';
import Square from './square';

export default function Board() {
    const squares = useGameStore((state) => state.squares)
    const setSquares = useGameStore((state) => state.setSquares)

    function handleClick(i) {
        // if square already filled, ignore click
        if (squares[i]) return

        // else update square so it is filled
        const nextSquares = squares.slice()
        nextSquares[i] = 'X'
        setSquares(nextSquares)
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