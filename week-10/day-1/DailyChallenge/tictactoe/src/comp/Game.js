import React, { useState } from "react";
import { Checker } from "./Checker";
import Board from "./Board";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const winner = Checker(squares);
  const xo = xIsNext ? " X" : " O";
  const handleClick = (i) => {
    if (winner || squares[i]) return;
    squares[i] = xo;
    setSquares(squares);

    setxIsNext(!xIsNext);
  };
  const reset = () => {
    setstepNumber(0);
    setxIsNext(" X");
  };
  const renderMoves = () =>
    //   history.map((_step, move )=>
    {
      <button onclick={() => reset()}>restart</button>;
    };
  return (
    <>
      <Board squares={squares} onClick={handleClick} />
      <div className="info-wrapper">
        <div>{renderMoves()}</div>
        <h3>{winner ? "Winner " + winner : "Next Player " + xo}</h3>
      </div>
    </>
  );
};
export default Game;
