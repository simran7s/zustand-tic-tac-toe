export default function Square({ value, onSquareClick}: { value: 'X' | 'O' | null, onSquareClick: () => void }) {
    return (
      <button
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          backgroundColor: '#fff',
          border: '1px solid #999',
          outline: 0,
          borderRadius: 0,
          fontSize: '1rem',
          fontWeight: 'bold',
          color: '#333',
        }}
        onClick={onSquareClick}
      >
        {value ?? ""}
      </button>
    )
  }