import React, { useState } from "react";
import Webcam from "react-webcam";
import useStrings from "Helpers/MultiSpråk/useStrings";
import PossibleMovesChess from "./PossibleMovesChess";

const MainEventComponent = () => {
  //const [chess] = useState(new Chess());
  const [historie, setHistorie] = useState([]);
  const { pieces, common, colors, moves } = useStrings();

  /*const [state, setState] = useState({
    fen: chess.fen(),
    // square styles for active drop square
    dropSquareStyle: {},
    // custom square styles
    squareStyles: {},
    // square with the currently clicked piece
    pieceSquare: "",
    // currently clicked square
    square: "",
    // array of past game moves
    history: [],
  });

  // keep clicked square style and remove hint squares
  const removeHighlightSquare = () => {
    setState(({ pieceSquare, history }) => ({
      squareStyles: squareStyling({ pieceSquare, history }),
    }));
  };

  // show possible moves
  /*const highlightSquare = (sourceSquare, squaresToHighlight) => {
    console.log(sourceSquare, squaresToHighlight);
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce((a, c) => {
      return {
        ...a,
        ...{
          [c]: {
            background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
            borderRadius: "50%",
          },
        },
        ...squareStyling({
          history: state.history,
          pieceSquare: state.pieceSquare,
        }),
      };
    }, {});
    setState(({ squareStyles }) => {
      console.log(squareStyles);
      return { squareStyles: { ...squareStyles, ...highlightStyles } };
    });
  };*/
  /*
  const highlightSquare = (sourceSquare, squaresToHighlight) => {
    // Definerer stilregler for ruter på sjakkbrettet
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce((a, c) => {
      return {
        ...a,
        ...{
          [c]: {
            background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
            borderRadius: "50%",
          },
        },
        // Legger til stilregler for ruter som har hatt et tidligere trekk
        ...squareStyling({
          history: state.history,
          pieceSquare: state.pieceSquare,
        }),
      };
    }, {});
    // Oppdaterer stilene for ruter på sjakkbrettet i state
    setState(({ squareStyles }) => {
      return { squareStyles: { ...squareStyles, ...highlightStyles } };
    });
  };
*/
  const player1 = {
    name: "Borgar Flaen Stensrud",
    webcam: () => {
      return <Webcam height={150} width={300} />;
    },
  };

  const player2 = {
    name: "Jane Smith",
    webcam: "https://dummyimage.com/320x240/000/fff",
  };

  // Merk: Denne funksjonen kan bli utdatert i MainEventComponent
  //(komponenten for direktesending av live-kamper)
  //hvis den underliggende sjakkmotoren eller spilllogikken endres.
  //Den håndterer for øyeblikket onDrop-hendelsen ved å gjøre
  //et trekk på sjakkbrettet og oppdatere spillhistorikken.

  //Hvis det gjøres endringer i sjakkmotoren eller spilllogikken,
  //kan denne funksjonen måtte oppdateres for å gjenspeile
  //disse endringene.

  /*const onDrop = ({ sourceSquare, targetSquare }) => {
    const move = chess.move({ from: sourceSquare, to: targetSquare });
    if (move) {
      setHistorie(chess.history({ verbose: true }));
      console.log("historie: ", historie);
      /*setState(({ history, pieceSquare }) => ({
        fen: chess.fen(),
        history: chess.history({ verbose: true }),
        pieceSquare: "",
        squareStyles: squareStyling({ pieceSquare, history }),
      }));*/
  /* }
  }*/

  /*const onMouseOutSquare = (square) => removeHighlightSquare(square);
  const onMouseOverSquare = (square) => {
    // get list of possible moves for this square
    let moves = chess.moves({
      square: square,
      verbose: true,
    });
    console.log("movesLength:", moves, "square: ", square);
    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    let squaresToHighlight = [];
    for (var i = 0; i < moves.length; i++) {
      squaresToHighlight.push(moves[i].to);
    }

    highlightSquare(square, squaresToHighlight);
  };
*/
  const pieceNames = {
    p: pieces.pawn,
    n: pieces.Knight,
    b: pieces.Bishop,
    r: pieces.Rook,
    q: pieces.Queen,
    k: pieces.King,
  };

  /*const squareStyling = ({ pieceSquare, history }) => {
    // Logger lengden på history-listen til konsollen
    console.log("history: ", history?.length);

    // Definerer variabler for kilden og målet til det siste trekket i history-listen
    const sourceSquare = history?.length && history[history.length - 1].from;
    const targetSquare = history?.length && history[history.length - 1].to;

    // Returnerer et objekt med stilregler for ruter på sjakkbrettet
    return {
      // Styling for ruten som er valgt av spilleren
      [pieceSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
      // Styling for kilden til det siste trekket i history-listen
      ...(history?.length && {
        [sourceSquare]: {
          backgroundColor: "rgba(255, 255, 0, 0.4)",
        },
      }),
      // Styling for målet til det siste trekket i history-listen
      ...(history?.length && {
        [targetSquare]: {
          backgroundColor: "rgba(255, 255, 0, 0.4)",
        },
      }),
    };
  };*/
  return (
    <div className="flex flex-row p-5 justify-around">
      <div className="">
        <h2 className="text-2xl font-bold mb-2">{common.championMatch}</h2>
        <PossibleMovesChess updateHistorie={(historie) => setHistorie(historie)} />
      </div>
      <div className="">
        <h2 className="text-2xl font-bold mb-2">{common.movesMade}</h2>
        <ul>
          {historie.map((move, index) => (
            <li key={index}>
              {move.color === "w" ? colors.white : colors.black} : {pieceNames[move.piece]}{" "}
              {moves.from} {move.from} {moves.to} {move.san}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 mr-5">
          <h2 className="text-2xl font-bold mb-2">{player1.name}</h2>
          {player1.webcam()}
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-2">{player2.name}</h2>
          <video src={player2.webcam} controls />
        </div>
      </div>
    </div>
  );
};
export default MainEventComponent;
