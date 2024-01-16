import React, { Component } from "react";
import PropTypes from "prop-types"; // importerer PropTypes for å validere props
import Webcam from "react-webcam";
import useStrings from "Helpers/MultiSpråk/useStrings";
import PossibleMovesChess from "./PossibleMovesChess";
import StopWatch from "statman-stopwatch";
import { Timer } from "@mui/icons-material";

// Routes
import routes from "routes";

// Navigasjon
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import { position } from "stylis";

import King from "assets/images/chess/king.png";

function MainEventWrapper() {
  const strings = useStrings();
  const pieces = strings.pieces;
  const colors = strings.colors;
  const moves = strings.moves;
  const common = strings.common;
  const pieceNames = {
    p: pieces.pawn,
    n: pieces.Knight,
    b: pieces.Bishop,
    r: pieces.Rook,
    q: pieces.Queen,
    k: pieces.King,
  };
  const player1 = {
    name: "Borgar Flaen Stensrud",
    webcam: () => {
      return <Webcam height={150} width={300} />;
    },
    timer: new StopWatch("Borgar Flaen Stensrud"),
  };

  // eslint-disable-next-line no-unused-vars
  const player2 = {
    name: "Jane Smith",
    webcam: () => {
      return <Webcam height={150} width={300} />;
    },
    timer: new StopWatch("Jane Smith"),
  };

  return (
    <MainEventComponent
      pieces={pieces}
      colors={colors}
      moves={moves}
      common={common}
      pieceNames={pieceNames}
      player1={player1}
      player2={player2}
    />
  );
}

class TimerReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.timer = setInterval(() => {
      // eslint-disable-next-line react/prop-types
      this.setState({ time: this.props.timer.read() });
    }, 1000);
  }

  formatTime(time) {
    const date = new Date(null);
    date.setSeconds(time / 1000);
    if (time < 3600000) {
      return `00:${date.toISOString().substr(14, 5)}`;
    }
    return date.toLocaleTimeString("en-US", { hour12: false });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.formatTime(this.state.time)}</div>;
  }
}

class MainEventComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historie: [{ history: "", blirAngrepet: false }],
    };

    // bruker vanlig funksjonssyntaks for å definere setHistorie-metoden
    // for å unngå problemer med class properties
    this.setHistorie = this.setHistorie.bind(this);
  }

  componentDidMount() {
    this.props.player1.timer.start();
    console.log("timer started", this.props.player1.timer.read());
    // hvis kampen starter så fort componenten blir mountet;
  }

  setHistorie(history) {
    console.log("historie", this.state.historie?.length);
    console.log("historie", this.state.historie);
    this.setState((prevState) => ({
      ...prevState,
      historie: [...prevState.historie, history],
    }));
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { colors, moves, common, pieceNames, player1, player2 } = this.props;

    return (
      <div className="p-5">
        <div className="px-5">
          <DefaultNavbar
            routes={routes}
            action={{
              type: "external",
              route: "https://www.creative-tim.com/product/material-kit-react",
              label: "free download",
              color: "dark",
            }}
            relative
            className="mt-5"
          />
          <Container
            position="absolute"
            className="pt-5 pb-5"
            style={{
              display: "flex",
              flexDirection: "column",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${King})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                flex: "1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "10%",
                height: "10%",
                backgroundImage: `url(${King})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Grid xs={12} lg={12} flex="flex" style={{ position: "relative" }}>
              <div className="">
                <div className="flex flex-row  gap-2 justify-between">
                  <div className="bg-white p-5 rounded">
                    <div className="mt-0">
                      <h2 className="text-2xl font-bold mb-5 flex justify-between">
                        {common.championMatch}
                        {/* add timer for the match, not only player timer */}
                        <span>{common.time} 01:22:33</span>
                      </h2>
                    </div>
                    <hr className="mb-5" />
                    <div className="pt-2">
                      <PossibleMovesChess
                        player1={player1}
                        player2={player2}
                        updateHistorie={({ historie, blirAngrepet }) => {
                          const newHistorie = { history: historie, blirAngrepet: blirAngrepet };
                          console.log("newHistorie", newHistorie);
                          this.setHistorie(newHistorie);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 bg-white p-5">
                    <h2 className="text-2xl font-bold mb-2">Chesspices</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                      <div className="flex bg-white p-5 rounded flex-col gap-2">
                        <h2 className="text-2xl font-bold mb-2">{player1.name}</h2>
                        {player1.webcam()}
                        <div className="flex items-center">
                          <Timer className="mr-2" />
                          <TimerReader timer={player1.timer} />
                        </div>
                      </div>
                      <div className="flex bg-white p-5 rounded flex-col gap-2">
                        <h2 className="text-2xl font-bold mb-2">{player2.name}</h2>
                        {player2.webcam()}
                        <div className="flex items-center">
                          <Timer className="mr-2" />
                          <TimerReader timer={player2.timer} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white flex-grow  p-5 rounded">
                      <h2 className="text-2xl pl-3 font-bold mb-2">{common.movesMade}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

// validerer props for MainEventComponent
MainEventComponent.propTypes = {
  pieces: PropTypes.object.isRequired,
  colors: PropTypes.object.isRequired,
  moves: PropTypes.object.isRequired,
  common: PropTypes.object.isRequired,
  pieceNames: PropTypes.object.isRequired,
  player1: PropTypes.object.isRequired,
  player2: PropTypes.object.isRequired,
};

export default MainEventWrapper;

/*
<ul>
                        {historie.map((move, index) => (
                          <li
                            key={index}
                            className="p-3"
                            style={move.captured ? { backgroundColor: "red", color: "white" } : {}}
                          >
                            {move.color === "w" ? colors.white : colors.black} :{" "}
                            {pieceNames[move.piece]} {moves.from} {move.from} {moves.to} {move.san}
                          </li>
                        ))}
                        </ul>*/
/*


<ul>
                      {historie.map((move, index) => (
                        <li key={index}>
                          {move.color === "w" ? colors.white : colors.black} :{" "}
                          {pieceNames[move.piece]} {moves.from} {move.from} {moves.to} {move.san}
                        </li>
                      ))}
                    </ul>*/
