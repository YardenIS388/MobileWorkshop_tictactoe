import React , {useState}from 'react';
import Square from './components/Square';

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  
    return (
        <div>
            <div className="board-row">
                <Square value={squares[0]} onClickSquare={()=> handleClick(0)}></Square>
                <Square value={squares[1]} onClickSquare={()=> handleClick(1)}></Square>
                <Square value={squares[2]} onClickSquare={()=> handleClick(2)}></Square>

            </div>
            <div className="board-row">
                <Square value={squares[3]} onClickSquare={()=> handleClick(3)}></Square>
                <Square value={squares[4]} onClickSquare={()=> handleClick(4)}></Square>
                <Square value={squares[5]} onClickSquare={()=> handleClick(5)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClickSquare={()=> handleClick(6)}></Square>
                <Square value={squares[7]} onClickSquare={()=> handleClick(7)}></Square>
                <Square value={squares[8]} onClickSquare={()=> handleClick(8)}></Square>
            </div>
        </div>
    )
}
