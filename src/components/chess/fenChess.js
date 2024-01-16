/* eslint-disable react/prop-types */
import React from "react";

import { Chessboard } from "react-chessboard";

// eslint-disable-next-line react/prop-types
const FenChess = ({ position, scale }) => {
  // Define a function for responsive size control
  const calcWidth = ({ screenWidth, screenHeight }) => {
    // Calculate the scaled width based on the scale factor and screen dimensions
    return Math.min(screenWidth, screenHeight) * scale;
  };

  const fen = position;
  console.log("FEN: ", fen);
  return (
    <Chessboard
      position={fen}
      calcWidth={calcWidth}
      boardStyle={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)" }}
    />
  );
};

export default FenChess;
