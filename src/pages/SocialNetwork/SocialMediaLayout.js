import React, { useState, useEffect } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MKBox from "components/MKBox";
import axios from "axios";
// Routes
import routes from "../../routes";
import ScaledRandomVsRandom from "components/chess/ScaledRandomVsRandom";
import ChessGameModal from "components/NewChessGameAddToStory/ChessGameModal";
import FenChess from "components/chess/fenChess";
import { Typography } from "@mui/material";
import MKButton from "components/MKButton";
import Container from "@mui/material/Container";
import FriendSuggestions from "./Components/FriendSuggestions";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const positions = [
    "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 4",
    "rnbqkb1r/3p1ppp/p2Ppn2/2p5/4P3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    "r1bqk2r/ppp2ppp/2n1pn2/2P5/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 6",
  ];
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [email, setUserEmail] = useState("");

  useEffect(() => {
    // Fetch user's email from localStorage
    const storedUserEmail = localStorage.getItem("userEmail");

    // If the email is present, set it in the component state
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    } else {
      // Alternatively, you can make an API request to fetch user details
      // Now using details endpoint to fetch user details.
      axios
        .get("https://grandmasterssmith-server.onrender.com") // Replace with your actual API endpoint
        .then((response) => {
          setUserEmail(response.data.firstName);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <Container>
      <div onClick={closeModal}>
        <MKBox>
          <div className="mb-5 mt-5 p-0">
            <DefaultNavbar
              routes={routes}
              action={{
                type: "internal",
                route:
                  "https://www.creative-tim.com/product/material-kit-react",
                label: "Log out",
                color: "error",
              }}
              relative
              padding={{ xs: "0px", sm: "0px", md: "0px", lg: "0px" }}
            />
          </div>
          <div className="p-5" style={{ marginTop: "0px" }}>
            <div className="grid  grid-flow-row-dense grid-cols-4 gap-4 ">
              {/* Profile column */}
              <div className="">
                <div className="post p-0 lg:p-0  rounded-md">
                  <div className="">
                    <div className="bg-white p-0 rounded-lg shadow-md max-w-md  mb-4">
                      <div className="relative">
                        <img
                          src="https://placekitten.com/500/150"
                          alt="Banner Profile"
                          className="w-full rounded-t-lg"
                        />
                        <img
                          src="https://placekitten.com/150/150"
                          alt="Profile Picture"
                          className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center mt-4">
                          <h2 className="text-xl font-bold text-gray-800">
                            {email}
                          </h2>
                        </div>

                        <p className="text-gray-700 mt-2">
                          {" "}
                          Web Developer | Cat Lover | Coffee Enthusiast{" "}
                        </p>
                        <Link to="/edit-profile">
                          <MKButton className="mt-2" color="info">
                            Edit profile
                          </MKButton>
                        </Link>
                        <div className="flex items-center mt-4 space-x-4">
                          <a href="#" className="text-blue-500 hover:underline">
                            {" "}
                            Twitter{" "}
                          </a>
                          <a href="#" className="text-blue-500 hover:underline">
                            {" "}
                            GitHub{" "}
                          </a>
                          <a href="#" className="text-blue-500 hover:underline">
                            {" "}
                            LinkedIn{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-0 lg:p-0  rounded-md">
                  <div className="">
                    <div className="bg-white p-5 rounded-lg shadow-md max-w-md  mb-4">
                      <Typography className="flex">
                        <h2 className="text-1xl font-bold text-gray-800 mb-4">
                          200 players online
                        </h2>
                      </Typography>
                      <MKButton color="info" shadow={{ sh: 2 }}>
                        Go to loby
                      </MKButton>
                    </div>
                  </div>
                </div>
                <div className=" p-0 lg:p-0  rounded-md">
                  <div className="">
                    <div className="bg-white p-5 rounded-lg shadow-md max-w-md  mb-4">
                      <Typography className="flex">
                        <h2 className="text-1xl font-bold text-gray-800 mb-4">
                          21 live games
                        </h2>
                      </Typography>
                      <MKButton color="info">Go to live games</MKButton>
                    </div>
                  </div>
                </div>
                <div className=" p-0 lg:p-0  rounded-md">
                  <div className="">
                    <div className="bg-white p-5 rounded-lg shadow-md max-w-md  mb-4">
                      <Typography className="flex">
                        <h2 className="text-1xl font-bold text-gray-800 mb-4">
                          200 players online
                        </h2>
                      </Typography>
                      <MKButton color="info">Go to loby</MKButton>
                    </div>
                  </div>
                </div>
              </div>
              {/* Posts column */}
              <div className="col-span-2">
                <div
                  className=" p-5 rounded-lg shadow-md  mb-5"
                  style={{ backgroundColor: "#fff" }}
                >
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    People you may know:
                  </label>

                  <form className="mt-5">
                    <div className="mb-6">
                      <label
                        htmlFor="postContent"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Post Content:
                      </label>
                      <textarea
                        id="postContent"
                        name="postContent"
                        rows="4"
                        className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
                    sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
                        placeholder="What's on your mind?"
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="fileAttachment"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Attach a chess game:
                      </label>
                      <div
                        onClick={openModal}
                        className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out"
                      >
                        <div className="flex items-center">
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
                          <span className="ml-2 text-sm text-gray-600">
                            Choose a chessgame
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Player vs player / Player vs computer
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
                      >
                        {" "}
                        Post{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          viewBox="0 0 24 24"
                          id="send"
                          fill="#fff"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                        </svg>
                      </button>
                      <span className="text-gray-500 text-sm">
                        Max 280 characters
                      </span>
                    </div>
                  </form>
                </div>
                <FriendSuggestions />
                <hr className="mt-5" />

                <div className="p-0 xl:col-span-2 mt-3 ">
                  <div className="grid grid-cols-1 cols-span-2 lg:grid-cols-1 gap-4  mt-5">
                    <div className="p-8 rounded-lg bg-white shadow-md ">
                      <div className="flex  items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <img
                            src="https://placekitten.com/40/40"
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="ml-4">
                            <p className="text-gray-800 font-semibold">
                              John Doe
                            </p>
                            <p className="text-gray-500 text-sm">
                              Posted 2 hours ago
                            </p>
                            <p>King&apos;s Gambit Accepted</p>
                          </div>
                        </div>
                        <div className="text-gray-500 cursor-pointer">
                          <button className="hover:bg-gray-50 rounded-full p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="7" r="1" />
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="17" r="1" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-800">
                          Another opening for the win.
                        </p>
                        <br />
                        <a href="" className="text-blue-600">
                          #KingsGambitAccepted
                        </a>
                        <a href="" className="text-blue-600">
                          &nbsp; #ForTheWin
                        </a>
                        <br />
                        <a href="" className="text-blue-600">
                          #Chess2023
                        </a>
                      </div>
                      <hr className="mt-5" />
                      <div className="mb-4 mt-5">
                        <FenChess
                          position={positions[0]}
                          scale={1 / 4.5}
                          className="mr-4"
                        />
                      </div>

                      <hr className="mt-5" />
                      <div className="flex items-center justify-between text-gray-500 mt-5">
                        <div className="flex items-center space-x-2">
                          <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                            <svg
                              className="w-5 h-5 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span>42 Likes</span>
                          </button>
                        </div>
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                          <svg
                            width="22px"
                            height="22px"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                              ></path>
                            </g>
                          </svg>
                          <span>3 Comment</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-8 shadow-md rounded-lg mt-5">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <img
                            src="https://placekitten.com/40/40"
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="text-gray-800 font-semibold">
                              Borgar Flaen Stensrud
                            </p>
                            <p className="text-gray-500 text-sm">
                              Posted 5 hours ago
                            </p>
                          </div>
                        </div>
                        <div className="text-gray-500 cursor-pointer">
                          <button className="hover:bg-gray-50 rounded-full p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="7" r="1" />
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="17" r="1" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-800">Sicilian Defense</p>
                        <a href="" className="text-blue-600">
                          #Sicilian
                        </a>
                      </div>
                      <hr className="mt-5" />
                      <div className="mb-4 mt-5">
                        <FenChess
                          position={positions[1]}
                          scale={1 / 4.5}
                          className="mr-4"
                        />
                      </div>

                      <hr className="mt-5" />
                      <div className="flex items-center justify-between text-gray-500 mt-5">
                        <div className="flex items-center space-x-2">
                          <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                            <svg
                              className="w-5 h-5 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span>42 Likes</span>
                          </button>
                        </div>
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                          <svg
                            width="22px"
                            height="22px"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                              ></path>
                            </g>
                          </svg>
                          <span>3 Comment</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md ">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <img
                            src="https://placekitten.com/40/40"
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="text-gray-800 font-semibold">
                              Erik-Tobias
                            </p>
                            <p className="text-gray-500 text-sm">
                              Posted 3 days ago
                            </p>
                          </div>
                        </div>
                        <div className="text-gray-500 cursor-pointer">
                          <button className="hover:bg-gray-50 rounded-full p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="7" r="1" />
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="17" r="1" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-800">
                          Ruy Lopez <br />
                          The Ruy Lopez, also known as the Spanish Opening, is a
                          classic chess opening that starts with 1.e4 e5 2.Nf3
                          Nc6 3.Bb5. It&apos;s known for its rich history and
                          strategic complexity, making it a favorite choice for
                          many chess enthusiasts.
                        </p>
                        <a href="" className="text-blue-600">
                          #RuyLopes
                        </a>
                        <a href="" className="text-blue-600">
                          #ChessOpening
                        </a>
                      </div>
                      <hr className="mt-5" />
                      <div className="mb-4 mt-5">
                        <FenChess
                          position={positions[2]}
                          scale={1 / 4.5}
                          className="mr-4"
                        />
                      </div>
                      <hr className="mt-5" />
                      <div className="flex items-center justify-between text-gray-500 mt-5">
                        <div className="flex items-center space-x-2">
                          <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                            <svg
                              className="w-5 h-5 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span>42 Likes</span>
                          </button>
                        </div>
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                          <svg
                            width="22px"
                            height="22px"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                              ></path>
                            </g>
                          </svg>
                          <span>3 Comment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right column */}
              <div className="">
                <div className=" p-0  shadow-md   mb-5 ">
                  <div className="p-0 bg-white rounded-lg">
                    <div className="bg-white p-2 rounded-lg  shadow-md">
                      <h2 className="text-2xl font-bold text-gray-800 ">
                        Top 5 Ranking Players
                      </h2>
                      <ul className="pt-2">
                        <li className="flex items-center justify-between mt-5 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-semibold text-gray-800 mr-3">
                              1.
                            </span>
                            <img
                              src="https://picsum.photos/80"
                              alt="Player 1"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-5">
                              <h3 className="text-lg font-semibold text-gray-800">
                                Player 1
                              </h3>
                              <p className="text-gray-600">Rank: 1st</p>
                            </div>
                          </div>
                          <span className="text-xl font-semibold text-gray-800">
                            1000 Points
                          </span>
                        </li>
                        <hr className="mt-5 mb-5" />
                        <li className="flex items-center mt-5 justify-between mb-4">
                          <div className="flex items-center">
                            <span className="text-xl font-semibold text-gray-800 mr-3">
                              2.
                            </span>
                            <img
                              src="https://picsum.photos/80"
                              alt="Player 2"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-5">
                              <h3 className="text-lg font-semibold text-gray-800">
                                Player 2
                              </h3>
                              <p className="text-gray-600">Rank: 2nd</p>
                            </div>
                          </div>
                          <span className="text-xl font-semibold text-gray-800">
                            950 Points
                          </span>
                        </li>
                        <hr className="mt-5 mb-5" />
                        <li className="flex items-center mt-5 justify-between mb-4">
                          <div className="flex items-center">
                            <span className="text-xl font-semibold text-gray-800 mr-3">
                              3.
                            </span>
                            <img
                              src="https://picsum.photos/80"
                              alt="Player 3"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-5">
                              <h3 className="text-lg font-semibold text-gray-800">
                                Player 3
                              </h3>
                              <p className="text-gray-600">Rank: 3rd</p>
                            </div>
                          </div>
                          <span className="text-xl font-semibold text-gray-800">
                            900 Points
                          </span>
                        </li>
                        <hr className="mt-5 mb-5" />
                        <li className="flex items-center mt-5 justify-between mb-4">
                          <div className="flex items-center">
                            <span className="text-xl font-semibold text-gray-800 mr-3">
                              4.
                            </span>
                            <img
                              src="https://picsum.photos/80"
                              alt="Player 4"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-5">
                              <h3 className="text-lg font-semibold text-gray-800">
                                Player 4
                              </h3>
                              <p className="text-gray-600">Rank: 4th</p>
                            </div>
                          </div>
                          <span className="text-xl font-semibold text-gray-800">
                            850 Points
                          </span>
                        </li>
                        <hr className="mt-5 mb-5" />
                        <li className="flex items-center mt-5 justify-between">
                          <div className="flex items-center">
                            <span className="text-xl font-semibold text-gray-800 mr-3">
                              5.
                            </span>
                            <img
                              src="https://picsum.photos/80"
                              alt="Player 5"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-5">
                              <h3 className="text-lg font-semibold text-gray-800">
                                Player 5
                              </h3>
                              <p className="text-gray-600">Rank: 5th</p>
                            </div>
                          </div>
                          <span className="text-xl font-semibold text-gray-800">
                            800 Points
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md w-full mt-5 mb-5">
                    <div className="lg:col-span-1">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Latest Gameplay
                      </h2>

                      <p className="text-gray-600 mb-4">
                        Check out our most recent chess game:
                      </p>

                      <div className="flex flex-col bg-gray-100 p-2 rounded-md mb-4">
                        <div className="text-lg font-semibold text-gray-800 mr-5">
                          Time Elapsed:{" "}
                          <span className="text-blue-500">2:35:17</span>
                        </div>
                        <div className="text-lg  font-semibold text-gray-800">
                          Victor:{" "}
                          <span className="text-green-500">PlayerA</span>
                        </div>
                      </div>
                      <ScaledRandomVsRandom scale={1 / 4} />
                      {/* Insert your latest chessboard component here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* ... (modal code) */}
              <ChessGameModal />
            </div>
          )}
        </MKBox>
      </div>
    </Container>
  );
};

export default Profile;
