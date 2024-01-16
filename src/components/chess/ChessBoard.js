// ChessBoard.js
import React from "react";

import Chessboard from "react-chessboard";

// eslint-disable-next-line react/prop-types
const ChessBoard = ({ position, onDrop }) => {
  return (
    <Chessboard
      position={position}
      onDrop={onDrop}
      boardStyle={{
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
        width: "200px",
        height: "200px",
        marginRight: "20px",
      }}
    />
  );
};

export default ChessBoard;
