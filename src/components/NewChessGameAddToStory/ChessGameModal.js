import React, { useState } from "react";

const ChessGameModal = () => {
  const [gameType, setGameType] = useState("Player vs Player");
  const [dateRange, setDateRange] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [games] = useState([
    {
      id: 0,
      imageSrc: "https://placekitten.com/100/100/",
      player1: "John Doe",
      player2: "Alice Smith",
      winner: "John Doe",
      ratingChange: "+25",
    },
    {
      id: 1,
      imageSrc: "https://placekitten.com/100/100/",
      player1: "John Doe",
      player2: "Alice Smith",
      winner: "John Doe",
      ratingChange: "+25",
    },
    {
      id: 2,
      imageSrc: "https://placekitten.com/100/100/",
      player1: "John Doe",
      player2: "Alice Smith",
      winner: "John Doe",
      ratingChange: "+25",
    },
    {
      id: 3,
      imageSrc: "https://placekitten.com/100/100/",
      player1: "John Doe",
      player2: "Alice Smith",
      winner: "John Doe",
      ratingChange: "+25",
    },
    // Add more game objects here
  ]);

  return (
    <div className=" max-w-4xl  flex items-center justify-center z-50">
      <div className="bg-white w-full justify-around rounded-lg shadow-lg p-6">
        {/* Modal Header */}
        <div className="mb-5 flex w-full items-center p-5 justify-between p-4">
          {/* Game Type Dropdown */}
          <div className="relative mr-4">
            <select
              value={gameType}
              onChange={(e) => setGameType(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="Player vs Player">Player vs Player</option>
              <option value="Player vs Computer">Player vs Computer</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
          </div>
          {/* Date Time Range Picker */}
          <input
            type="text"
            placeholder="Select date range"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="block w-2/5 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* Search Input */}
          <div className="flex justify-between w-[20%]">
            <input
              type="text"
              placeholder="Search games or players"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-2/5 bg-white border border-gray-300 text-gray-700 py-3 px-4   focus:outline-none focus:border-blue-500"
            />
            {/* Search Button */}
            <button className="bg-blue-500 text-white hover:bg-blue-600  px-4 py-2  ">
              Search
            </button>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="mt-5 mb-5" />

        {/* Game List */}
        <div>
          {games.map((game) => (
            <div key={game.id} className="flex items-center w-full justify-between mb-5 mt-5 p-4">
              <img src={game.imageSrc} alt="Game Thumbnail" className="w-16 h-16  mr-4" />
              <div>
                <p className="text-gray-800 text-lg font-semibold">
                  {game.player1} vs {game.player2}
                </p>
                <p>
                  Winner: {game.winner}, Rating Change: {game.ratingChange}
                </p>
              </div>
              <button className="bg-blue-500 text-white hover:bg-blue-600  px-4 py-2  ">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChessGameModal;
