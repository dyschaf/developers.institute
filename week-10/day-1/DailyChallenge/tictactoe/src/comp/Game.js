import React, { useState } from "react";
import { Checker } from "./Checker";
import Board from "./Board";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [stepNumber, setstepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);
  const winner = Checker(squares);
  const xo = xIsNext ? "X" : "O";
  const handleClick = (i) => {
    console.log({ i });
    if (winner || squares[i]) return;
    squares[i] = xo;
    setSquares(squares);
    // setstepNumber(historyPoint.length);
    setxIsNext(!xIsNext);
  };
  const reset = () => {
    setstepNumber(0);
    setxIsNext("X");
  };
  const renderMoves = () =>
    //   history.map((_step, move )=>
    {
      <button onclick={() => reset()}>restart</button>;
    };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner" + winner : "Nect Player" + xo}</h3>
      </div>
    </>
  );
};
export default Game;
