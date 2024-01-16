import GameLobby from "components/chess/GameLobby";
import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Container from "@mui/material/Container";

const GameLobbyContainer = () => {
  //update to initiate gamelobby with active games for viewing and games for joining and this player is to be enabled to search all active players for a matchmaking so lets bring in all active players in the dummy data too.
  // Dummy data

  //update to initiate gamelobby with active games for viewing and games for joining
  // Define state for active games and games for joining
  const activeGames = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Active Game ${i + 1}`,
    players: [`Player ${i + 1}`, `Player ${i + 2}`],
    status: "in progress",
  }));

  const joinableGames = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Joinable Game ${i + 1}`,
    players: [`Player ${i + 1}`, `Player ${i + 2}`],
    status: "waiting",
  }));
  const upcomingTournaments = [
    {
      id: 1,
      name: "Battle Royale",
      date: new Date("2022-01-01"),
      onSignUp: () => console.log("Signed up for Battle Royale"),
    },
    {
      id: 2,
      name: "Clash of Titans",
      date: new Date("2022-02-01"),
      onSignUp: () => console.log("Signed up for Clash of Titans"),
    },
    {
      id: 3,
      name: "Champions League",
      date: new Date("2022-03-01"),
      onSignUp: () => console.log("Signed up for Champions League"),
    },
    {
      id: 4,
      name: "Grand Slam",
      date: new Date("2022-04-01"),
      onSignUp: () => console.log("Signed up for Grand Slam"),
    },
    {
      id: 5,
      name: "World Cup",
      date: new Date("2022-05-01"),
      onSignUp: () => console.log("Signed up for World Cup"),
    },
  ];
  const handleStartGame = (gameId) => {
    console.log(`Starting game ${gameId}...`);
    // Add code to start the game here
  };

  return (
    <div className="pt-5">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "dark",
        }}
        relative
        className=""
      />
      <Container className="mt-5">
        <div className="game-lobby-container">
          <GameLobby
            activeGames={activeGames}
            joinableGames={joinableGames}
            onStartGame={() => handleStartGame()}
            upcomingTournaments={upcomingTournaments}
          />
        </div>
      </Container>
    </div>
  );
};

export default GameLobbyContainer;
