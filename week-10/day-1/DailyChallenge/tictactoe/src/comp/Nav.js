// import React from "react";
import Square from "./Square";
import React, { useState } from "react";
const Nav = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="board">
      <nav>
        <ul>
          <li //</ul>onClick={()=>}
          >
            Versus AI
          </li>
          <li //</ul>onClick={()=>}
          >
            2 Players
          </li>
          <li>
            <button onClick={() => setSquares(Array(9).fill(null))}>
              Reset Board
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
