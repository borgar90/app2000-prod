/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Chess openings",
    description: "A broad selections of chess openings",
    items: [
      {
        image: `${imagesPrefix}/opening1.jpg`,
        name: "Ruy Lopez",
        count: 25,
        pro: true,
        route: "/chess-openings/ruy-lopez/1",
      },
      {
        image: `${imagesPrefix}/opening2.jpg`,
        name: "Sicilian Defense",
        count: 20,
        pro: true,
        route: "/chess-openings/sicilian-defense/2",
      },
      {
        image: `${imagesPrefix}/opening3.jpg`,
        name: "French Defense",
        count: 18,
        pro: true,
        route: "/chess-openings/french-defense/3",
      },
      {
        image: `${imagesPrefix}/opening4.jpg`,
        name: "Caro-Kann Defense",
        count: 22,
        pro: true,
        route: "/chess-openings/caro-kann-defense/4",
      },
      {
        image: `${imagesPrefix}/opening5.jpg`,
        name: "Italian Game",
        count: 24,
        pro: true,
        route: "/chess-openings/italian-game/5",
      },
      {
        image: `${imagesPrefix}/opening6.jpg`,
        name: "Pirc Defense",
        count: 17,
        pro: true,
        route: "/chess-openings/pirc-defense/6",
      },
      {
        image: `${imagesPrefix}/opening7.jpg`,
        name: "King's Gambit",
        count: 16,
        pro: true,
        route: "/chess-openings/kings-gambit/7",
      },
    ],
  },
  {
    title: "Chess endings",
    description: "30+ endings that will lead you to check mate your every enemy",
    items: [
      {
        image: `${imagesPrefix}/ending1.jpg`,
        name: "King and Pawn vs. King",
        count: 4,
        route: "/chess-endings/king-and-pawn-vs-king/1",
      },
      {
        image: `${imagesPrefix}/ending2.jpg`,
        name: "Rook and King vs. King",
        count: 6,
        route: "/chess-endings/rook-and-king-vs-king/2",
      },
      {
        image: `${imagesPrefix}/ending3.jpg`,
        name: "Queen and King vs. King",
        count: 8,
        route: "/chess-endings/queen-and-king-vs-king/3",
      },
      {
        image: `${imagesPrefix}/ending4.jpg`,
        name: "Knight and King vs. King",
        count: 5,
        route: "/chess-endings/knight-and-king-vs-king/4",
      },
      {
        image: `${imagesPrefix}/ending5.jpg`,
        name: "Bishop and King vs. King",
        count: 7,
        route: "/chess-endings/bishop-and-king-vs-king/5",
      },
      {
        image: `${imagesPrefix}/ending6.jpg`,
        name: "Two Bishops vs. King",
        count: 6,
        route: "/chess-endings/two-bishops-vs-king/6",
      },
    ],
  },
  {
    title: "Chess tutorials",
    description: "50+ tutorials that you need to improve your gameplay.",
    items: [
      {
        image: `${imagesPrefix}/tutorial1.jpg`,
        name: "Opening Strategies",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/tutorial2.jpg`,
        name: "Pawn Structure Principles",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/tutorial3.jpg`,
        name: "Middlegame Tactics",
        count: 10,
        pro: true,
      },
      {
        image: `${imagesPrefix}/tutorial4.jpg`,
        name: "Endgame Techniques",
        count: 5,
        route: "/chess-tutorials/endgame-techniques/4",
      },
      {
        image: `${imagesPrefix}/tutorial5.jpg`,
        name: "Piece Coordination",
        count: 7,
        route: "/chess-tutorials/piece-coordination/5",
      },
      {
        image: `${imagesPrefix}/tutorial6.jpg`,
        name: "Mastering Checkmates",
        count: 6,
        route: "/chess-tutorials/mastering-checkmates/6",
      },
    ],
  },
];
