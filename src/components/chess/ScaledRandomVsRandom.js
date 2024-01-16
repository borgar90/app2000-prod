// ScaledRandomVsRandom.js
import React from "react";
import { Chessboard } from "react-chessboard";

// eslint-disable-next-line react/prop-types
const ScaledRandomVsRandom = ({ scale }) => {
  // Define a function for responsive size control
  const calcWidth = ({ screenWidth, screenHeight }) => {
    // Calculate the scaled width based on the scale factor and screen dimensions
    return Math.min(screenWidth, screenHeight) * scale;
  };

  return (
    <Chessboard
      position="start"
      calcWidth={calcWidth}
      boardStyle={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)" }}
    />
  );
};

export default ScaledRandomVsRandom;
