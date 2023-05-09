import React from 'react';
import Knight from './Knight';
import BoardSquare from './BoardSquare'
import { observe } from './Game';


function renderSquare(i, knightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}


function ChessBoard() {
  const [knightPosition, setKnightPosition] = React.useState('');

  React.useEffect(() => {
    observe((newKnightPosition) => {
      setKnightPosition(newKnightPosition);
    });
  }, []);

  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
  );
}

export default ChessBoard;