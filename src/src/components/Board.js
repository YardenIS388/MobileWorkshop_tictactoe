import React , {useState}from 'react';
import Square from './Square';

export default function Board({ xIsNext, squares, onPlay }) {
    // const [xIsNext, setXIsNext] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {

      if (squares[i] || calculateWinner(squares) ) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
    //   setSquares(nextSquares);
    //   setXIsNext(!xIsNext);
    onPlay(nextSquares)
    }

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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }


  
    return (
        <div>
            <div className="status">{status}</div>
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
