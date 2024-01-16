import React from "react";
import PropTypes from "prop-types";
import MKButton from "components/MKButton";

const GameLobby = ({ activeGames, joinableGames, upcomingTournaments, onStartGame }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[500px] max-w-full p-5 rounded-lg ">
        <h1 className="text-3xl font-bold mb-4">Game Lobby</h1>
        <div className="flex flex-row gap-10">
          <div>
            <div className="flex flex-col gap-5">
              <div className="mb-4 mt-5  p-5  bg-white">
                <h2 className="text-2xl font-bold mb-2">Main Event</h2>
                <p>Details about the main event go here.</p>
              </div>
              <div className="mb-4 p-5  bg-white mt-5">
                <h2 className="text-2xl  font-bold mb-2">Upcoming Tournaments</h2>
                {upcomingTournaments && upcomingTournaments.length > 0 ? (
                  <ul>
                    {upcomingTournaments.map((tournament, index) => (
                      <li
                        key={tournament.id}
                        className={`text-lg flex flex-row justify-between content-between p-2 ${
                          index % 2 === 0 ? "bg-gray-100" : "bg-white"
                        }`}
                      >
                        <p>
                          {tournament.name.substring(0, 13)} -{" "}
                          {tournament.date.toLocaleDateString()}{" "}
                        </p>
                        <MKButton
                          className="bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          onClick={() => tournament.onSignUp(tournament.id)}
                          size="small"
                          style={{ height: "50%", width: "45%" }}
                        >
                          Sign Up
                        </MKButton>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg">No upcoming tournaments</p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-4 mt-5 bg-white p-5">
            <h2 className="text-2xl font-bold mb-2">Active Games</h2>

            <div className="mt-5">
              {activeGames && activeGames.length > 0 ? (
                //<CustomScroll heightRelativeToParent="calc(100% - 20px)">
                <ul>
                  {activeGames.map((game, index) => (
                    <li
                      key={game.id}
                      className={`text-lg p-2 flex flex-row justify-between items-center ${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <p>
                        {game.name} ({game.players.join(", ")}) - {game.status}{" "}
                      </p>
                      <MKButton
                        className=" bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={() => onStartGame(game.id)}
                        size="small"
                        style={{ height: "50%" }}
                      >
                        Spectate
                      </MKButton>
                    </li>
                  ))}
                </ul>
              ) : (
                //</CustomScroll>
                <p className="text-lg">No active games</p>
              )}
            </div>
          </div>

          <div className="mb-4 mt-5 bg-white p-5">
            <h2 className="text-2xl font-bold mb-2 ">Joinable Games</h2>
            <div className="mt-5">
              {joinableGames && joinableGames.length > 0 ? (
                <ul>
                  {joinableGames.map((game, index) => (
                    <li
                      key={game.id}
                      className={`text-lg flex justify-between items-center p-2 ${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <p className="">
                        {game.name} ({game.players.join(", ")}) - {game.status}{" "}
                      </p>
                      <MKButton
                        className="bg-blue-500  text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={() => onStartGame(game.id)}
                        size="small"
                        variant="gradient"
                        style={{ height: "50%" }}
                      >
                        Join
                      </MKButton>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg">No joinable games</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GameLobby.propTypes = {
  activeGames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      players: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      status: PropTypes.oneOf(["in progress", "waiting"]).isRequired,
    }).isRequired
  ).isRequired,
  joinableGames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      players: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      status: PropTypes.oneOf(["in progress", "waiting"]).isRequired,
    }).isRequired
  ).isRequired,
  upcomingTournaments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      onSignUp: PropTypes.func.isRequired,
    }).isRequired
  ).isRequired,

  onStartGame: PropTypes.func.isRequired,
};
export default GameLobby;
