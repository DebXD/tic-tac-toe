import React from "react";
import {useState} from 'react';
import calculateWinner from "./winnerClac";

function Square(prop) {
  return (
    <button className="square" onClick={() => prop.onSquareClick()}>
      {prop.value}
    </button>
  );
}

export default function Board() {
  // create an array which includes only null value
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    console.log("button pressed");
    // check if the square is filled or winner has been selected
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    // create a exact copy of squared in nextSquares
    const nextSquares = squares.slice();
    // to set a different index on each rotation
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  // show status
  const winner = calculateWinner(squares);
  let statusString = "";
  if (winner) {
    statusString = "Winner : " + winner;
  } else {
    statusString = "Next Player : " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{statusString}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
