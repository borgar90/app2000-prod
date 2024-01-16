/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import PropTypes from "prop-types";
import { WHITE } from "chess.js";
import { BLACK } from "chess.js";
import { SQUARES } from "chess.js";

const PossibleMovesChess = ({ updateHistorie, player1, player2 }) => {
  const [chess] = useState(new Chess());
  const [history, setHistory] = useState([]);
  const [fen, setFen] = useState("start");
  const [dropSquareStyle] = useState({});
  const [squareStyles, setSquareStyles] = useState({});
  const [pieceSquare, setPieceSquare] = useState("");
  const [sourceSquare, setSourceSquare] = useState("");
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [blirAngrepet, setBlirAngrepet] = useState(false);

  function predictAttacks(fen) {
    const chess = new Chess(fen);
    const playerColor = chess.turn();
    const enemyColor = playerColor === "w" ? "b" : "w";
    const playerStartingPosition = getEnemyPiecePositions(enemyColor);
    const enemyStartingPosition = getEnemyPiecePositions(playerColor);
    const possibleAttacks = [];

    for (let i = 0; i < 3; i++) {
      const whiteMoves = chess.moves({ verbose: true });
      for (const whiteMove of whiteMoves) {
        const whiteTo = whiteMove.to;
        const whiteFrom = whiteMove.from;
        chess.move(whiteMove.san);
        const blackMoves = chess.moves({ verbose: true });
        for (const blackMove of blackMoves) {
          const blackTo = blackMove.to;
          const blackFrom = blackMove.from;
          chess.move(blackMove.san);
          const isPlayerUnderAttack = playerStartingPosition.some(
            (playerSquare) => playerSquare.eS === whiteTo || playerSquare.eS === blackTo
          );
          if (isPlayerUnderAttack) {
            possibleAttacks.push({
              whiteMove: whiteMove.san,
              whiteFrom: whiteFrom,
              whiteTo: whiteTo,
              blackMove: blackMove.san,
              blackFrom: blackFrom,
              blackTo: blackTo,
            });
          }
          chess.undo();
        }
        chess.undo();
      }
    }

    return possibleAttacks;
  }

  const winMode = (possibleAttacks) => {
    if (possibleAttacks.length === 0) {
      console.log("game over");
    }
    for (let i = 0; i < possibleAttacks.length; i++) {
      console.log("possibleAttacks", possibleAttacks[i]);
      chess.move(possibleAttacks[i].whiteMove);
      chess.move(possibleAttacks[i].blackMove);
    }
  };

  const handleDrop = ({ sourceSquare, targetSquare }) => {
    const move = chess.move({ from: sourceSquare, to: targetSquare });

    if (move) {
      //console.log("possible attacks", predictAttacks(chess.fen()));

      // the players color that made a play, is oposite of the turn color
      const playerColor = chess.turn() === BLACK ? "w" : "b";
      const enemyColor = playerColor === "w" ? "b" : "w";
      //get every enemy piece position
      const enemyStartingPosition = getEnemyPiecePositions(playerColor);

      //returns the piece type and square friendly pieces
      const playerStartingPosition = getEnemyPiecePositions(enemyColor);
      /* console.log(
        "enemy",
        enemyStartingPosition,
        enemyStartingPosition.map((obj) => {
          return obj.eS + obj.eP + " " + obj.eS === obj.eP;
        })
      );
      console.log(
        "player",
        playerStartingPosition,
        playerStartingPosition.map((obj) => {
          return obj.eS + obj.eP + " " + obj.eS === obj.eP;
        })
      );*/
      //check if any of the enemy pieces can attack the target square
      playerStartingPosition.map((playerSquare) => {
        const enemyCanMove = chess
          .moves({ square: playerSquare.eS, piece: playerSquare.eP, verbose: true }, (move) => {
            console.log("to", move.to);
            console.log("from", move.from);
          })
          .some((move) => {
            console.log("move", move, "targetSquare", targetSquare, move === targetSquare);

            const isPlayerEnabledToAttack = enemyStartingPosition.filter(
              (playerSquare) => playerSquare.eS === move.to
            );
            console.log("isPlayerEnabledToAttack", isPlayerEnabledToAttack);
            isPlayerEnabledToAttack.length !== 0
              ? console.log("playerUnderAttack", isPlayerEnabledToAttack)
              : console.log("playerUnderAttack empty");
            //all legal moves of enemy at enemys position.
            console.log("move", move, "targetSquare", targetSquare, move === targetSquare);
            console.log(typeof move, typeof targetSquare);

            if (move === targetSquare) {
              console.log("move.to: " + move);
              return true;
            }
            return false;
          });

        console.log("enemyCanMove", enemyCanMove);
      });
      //check if player is in attack stance
      //check if player is in defense stance
      //check if player is in attack stance and is attacked
      //check if player is in defense stance and is attacked
      //check if player is in attack stance and is not attacked
      //check if player is in defense stance and is not attacked
      //check if player is in attack stance and is attacked and can move to safety
      //check if player is in defense stance and is attacked and can move to safety
      //check if player is in attack stance and is attacked and can not move to safety
      //check if player is in defense stance and is attacked and can not move to safety
      //check if player is in attack stance and is not attacked and can move to safety
      //check if player is in defense stance and is not attacked and can move to safety
      //check if player is in attack stance and is not attacked and can not move to safety
      //check if player is in defense stance and is not attacked and can not move to safety
      //check if player is in attack stance and is attacked and can move to safety and can attack
      //check if player is in defense stance and is attacked and can move to safety and can attack
      //check if player is in attack stance and is attacked and can not move to safety and can attack
      //check if player is in defense stance and is attacked and can not move to safety and can attack
      //check if player is in attack stance and is not attacked and can move to safety and can attack
      //check if player is in defense stance and is not attacked and can move to safety and can attack
      //check if player is in attack stance and is not attacked and can not move to safety and can attack

      if (chess.isAttacked(predictMoves(checkMoves(targetSquare)), chess.turn())) {
        //in attack stance) {
        console.log("blir angrepet");
        setBlirAngrepet(true);
      }
      if (isPlayer1Turn) {
        player1.timer.stop();
        player2.timer.start();
        setIsPlayer1Turn(false);
      } else {
        player1.timer.start();
        player2.timer.stop();
        setIsPlayer1Turn(true);
      }

      setHistory(chess.history({ verbose: true }));
      setFen(chess.fen());
      setPieceSquare("");
      setSquareStyles(squareStyling({ pieceSquare, history }));
      updateHistorie([{ history: move, blirAngrepet: blirAngrepet }]);
      setBlirAngrepet(false);
    }
  };

  /*Funksjonen tar inn en parameter color som 
  angir fargen på spilleren som skal finne fiendens brikker.
  Funksjonen bestemmer fargen på fiendens brikker basert på 
  color-parameteren. Funksjonen bruker SQUARES.
  reduce-metoden til å iterere over alle rutene på sjakkbrettet.
  For hver rute, bruker funksjonen chess.get-metoden til å 
  hente brikketypen på ruten. Hvis brikketypen er en fiendens brikke, 
  legger funksjonen til et objekt i acc-arrayet som inneholder 
  både brikketypen og ruten. Til slutt returnerer funksjonen 
  enemyPiecesAndSquares-arrayet som inneholder alle fiendens 
  brikker og deres ruter.*/

  const getEnemyPiecePositions = (color) => {
    const enemyColor = color === "w" ? "b" : "w";
    const enemyPiecesAndSquares = SQUARES.reduce((acc, square) => {
      const piece = chess.get(square);
      if (piece?.color === enemyColor) {
        acc.push({ eP: piece.type, eS: square });
      }
      return acc;
    }, []);

    return enemyPiecesAndSquares;
  };

  // eslint-disable-next-line no-unused-vars
  const predictSloppyMoves = (moves) => {
    if (moves?.length === 0) return;
    const squares = moves.to.map((move) => move);
    return squares;
  };

  const predictMoves = (moves) => {
    if (moves?.length === 0) return;
    const squares = moves.map((move) => move.to);
    return squares;
  };

  const checkMoves = (square) => {
    return chess.moves({
      square: square,
      verbose: true,
    });
  };

  const onMouseOverSquare = (square) => {
    let moves = checkMoves(square);
    const squaresToHighlight = predictMoves(moves);
    console.log(predictAttacks(chess.fen()));
    winMode(predictAttacks(chess.fen()));
    setSquareStyles((squareStyles) => ({
      ...squareStyles,
      ...squareStyling({
        pieceSquare,
        history,
        sourceSquare,
        targetSquare: moves.to,
        squaresToHighlight,
      }),
    }));
  };

  const onMouseOutSquare = () => {
    setSquareStyles(squareStyling({ pieceSquare, history }));
    setSourceSquare("");
  };

  const squareStyling = ({
    pieceSquare,
    history,
    sourceSquare,
    targetSquare,
    squaresToHighlight,
  }) => {
    const styles = {
      [pieceSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
      ...(history?.length && {
        [sourceSquare]: {
          backgroundColor: "rgba(255, 255, 0, 0.4)",
        },
      }),
      ...(history?.length && {
        [targetSquare]: {
          backgroundColor: "rgba(255, 255, 0, 0.4)",
        },
      }),
    };
    squaresToHighlight?.forEach((square) => {
      styles[square] = {
        ...styles[square],
        background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
        borderRadius: "50%",
      };
    });

    return styles;
  };

  return (
    <div>
      <Chessboard
        id="humanVsHuman"
        width={400}
        position={fen}
        onDrop={handleDrop}
        onMouseOverSquare={onMouseOverSquare}
        onMouseOutSquare={onMouseOutSquare}
        boardStyle={{
          borderRadius: "5px",
          boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
        }}
        dropSquareStyle={dropSquareStyle}
        squareStyles={squareStyles}
      />
    </div>
  );
};

PossibleMovesChess.propTypes = {
  updateHistorie: PropTypes.func.isRequired,
  player1: PropTypes.object.isRequired,
  player2: PropTypes.object.isRequired,
};

export default PossibleMovesChess;
