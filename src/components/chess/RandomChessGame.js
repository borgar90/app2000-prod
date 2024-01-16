import { Component } from "react";
import PropTypes from "prop-types";
import { Chess } from "chess.js";
import ChessBoard from "./ChessBoard";

const GAME = new Chess();

class RandomVsRandom extends Component {
  constructor(props) {
    super(props);

    // Define and initialize variables/methods within the constructor
    this.spillerTrekkPromise = null;

    this.getLovligeTrekk = () => {
      const alleTrekk = GAME.moves();
      const lovligeTrekk = [];

      for (const trekk of alleTrekk) {
        const lovlig = GAME.move(trekk);
        if (lovlig) lovligeTrekk.push(trekk);
        GAME.undo();
      }
      return lovligeTrekk;
    };

    this.getLovligTilfeldigTrekk = () => {
      const lovligeTrekk = this.getLovligeTrekk();

      if (lovligeTrekk.length > 0) {
        return lovligeTrekk[Math.floor(Math.random() * lovligeTrekk.length)];
      }
    };
  }

  static propTypes = { children: PropTypes.func };

  state = { fen: "start" };
  spillerHarFlyttet = false;
  spillMotorObj = {};

  componentDidMount() {
    console.log("MOUNT");
    this.initializeGame();
  }

  initializeGame = () => {
    const gameLoop = setInterval(() => {
      if (this.state.kunngjøring_game_over) {
        clearInterval(gameLoop);
        return;
      }

      if (!GAME.isGameOver() && !GAME.isStalemate()) {
        this.performEngineMove();
      } else {
        this.setState({ kunngjøring_game_over: true });
      }
    }, 500);
    this.setState({ spillerFarge: "black" });
    this.setState({ spillerHarFlyttet: true });
    this.performEngineMove();
  };

  performEngineMove = () => {
    const spillerTur = GAME.turn() === "w" ? "white" : "black";

    const getLovligeTrekk = () => {
      const alleTrekk = GAME.moves();
      const lovligeTrekk = [];

      for (const trekk of alleTrekk) {
        const lovlig = GAME.move(trekk);
        if (lovlig) lovligeTrekk.push(trekk);
        GAME.undo();
      }
      return lovligeTrekk;
    };

    const getLovligTilfeldigTrekk = () => {
      const lovligeTrekk = getLovligeTrekk();

      if (lovligeTrekk.length > 0) {
        return lovligeTrekk[Math.floor(Math.random() * lovligeTrekk.length)];
      }
    };

    if (spillerTur !== this.state.spillerFarge && this.state.spillerHarFlyttet) {
      const lovligTrekk = getLovligTilfeldigTrekk();
      console.log(this.state.fen);
      GAME.move(lovligTrekk);
      console.log(GAME.turn());
      console.log(GAME.fen());
      this.setState({ fen: GAME.fen() });
      this.setState({ spillerHarFlyttet: false });
    } else {
      this.onPlayerMove();
    }
  };

  onDrop = ({ sourceSquare, targetSquare }) => {
    console.log(sourceSquare);
    let trekk;
    try {
      trekk = GAME.move({
        from: sourceSquare,
        to: targetSquare,
      });
    } catch (exeption) {
      console.log(exeption);

      return;
    }

    console.log(trekk);

    this.setState({ fen: GAME.fen() });
    this.setState({ spillerHarFlyttet: true });
    this.performEngineMove();
    /*
    console.log("Source Square - x:", sourceSquare);
    console.log("Source Square - y:", targetSquare);




    if (this.spillerTrekkPromise) {
      console.log("promise start");
      this.spillerTrekkPromise.resolve(trekk); // Resolve the player's move promise
      this.spillerTrekkPromise = null;
    }
    */
    //this.setState({ fen: GAME.fen() });
    //this.spillMotor.forberedTrekk(trekk);
  };

  onPlayerMove = async () => {
    console.log("in player move");

    //perfect plass for timer--->

    //const sluppetBrikke = await this.spillerTrekkPromise;
    //console.log(sluppetBrikke);

    //if (sluppetBrikke === null) return;

    /*const trekk = {
      from: sluppetBrikke.from,
      to: sluppetBrikke.to,
      promotion: "q",
    };
    const lovligeTrekk = this.getLovligeTrekk;
    console.log(lovligeTrekk);
    if (!lovligeTrekk.includes(trekk)) return;

    if (trekk) console.log(trekk);
    GAME.move(trekk);
    this.setState({ fen: GAME.fen() });
    this.setState({ spillerHarFlyttet: true });
    this.performEngineMove(); */
  };

  spillerTrekkPromise() {
    return new Promise((resolve) => {
      this.spillerTrekkPromise = resolve;
    });
  }

  render() {
    const { fen } = this.state;
    console.log("RENDER FEN:", fen);
    return <ChessBoard position={fen} onDrop={this.onDrop} />;
  }
}

export default RandomVsRandom;
/*


export default function PlayRandomMoveEngine() {
  static propTypes = { children: PropTypes.func };


  const [game, setGame] = useState(new Chess());
  const [boardPosition, setBoardPosition] = useState("start");

  const makeRandomMove = useCallback(() => {
    if (game.game_over() || game.in_draw()) return;

    const possibleMoves = game.moves();
    if (possibleMoves.length === 0) return;

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const move = possibleMoves[randomIndex];

    // Update the game's state and the board's position
    game.move(move);
    setGame(new Chess(game.fen()));
    setBoardPosition(game.fen());
  }, [game]);

  useEffect(() => {
    makeRandomMove();
  }, [makeRandomMove]);

  const onDrop = (sourceSquare, targetSquare) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
    });
    console.log("moved");
    if (move) {
      // Check if the move is legal and update the game's state and the board's position
      game.move(move);
      setGame(new Chess(game.fen()));
      console.log(game.fen());
      setBoardPosition(game.fen());
      setTimeout(makeRandomMove, 200);
    }
  };

  return <Chessboard position={boardPosition} onDrop={onDrop} />;
}*/
