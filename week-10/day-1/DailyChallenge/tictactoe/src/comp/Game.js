import React, { useState } from "react";
import { Checker } from "./Checker";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState[Array(9).fill(null)];
  const [stepNumber, setstepNumber] = useState(0);
  const [xIsNext, setxIsNext] = useState(true);
  const winner = Checker(history, [stepNumber]);
  const xo = xIsNext ? "X" : "O";
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xo;
    setHistory([...historyPoint, squares]);
    setstepNumber(historyPoint.length);
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
      <hi>Tic Tac Toe</hi>
      <Board squares={history[setstepNumber]} onclick={handleClick} />
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
