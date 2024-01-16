/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router components
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";

import LanguageProvider from "./Helpers/MultiSpråk/LanguageContext";
import Register from "./pages/LandingPages/Register/index";

import { Helmet } from "react-helmet";
import Login from "./pages/LandingPages/SignIn/index";
import Home from "./pages/LandingPages/Protected/Home";
import PrivateRoute from "routes/PrivateRoute";
import EditProfile from "pages/SocialNetwork/Profile/EditProfile";
//import Strings from "Helpers/Strings/Strings";

export default function App() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useState("no");
  const [isAuthenticated, setIsAuthenticated] = useState(true); //true for testing

  const handleLogin = () => {
    //*TODO: add login logic
    // Perform login logic and call the onLogin function
    // setIsAuthenticated(true); when login is successfull
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    //*TODO: add logout logic
    // Perform logout logic and call the onLogout function
    // setIsAuthenticated(false); when logout is successfull
    setIsAuthenticated(false);
  };

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={index} />;
      }

      return null;
    });

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Grandmasters smith, Chess, Chess social network, Chess game, Chess online, Chess live, Chess tournament, Chess event, Chess news, Chess articles, Chess blog, Chess forum, Chess discussion, Chess chat, Chess community, Chess friends, Chess players, Chess openings, Chess puzzles, Chess tactics, Chess strategy, Chess coach, Chess trainer, Chess lessons, Chess books, Chess videos, Chess stream, Chess live stream, Chess streamers, Chess streamer, Chess twitch, Chess youtube, Chess instagram, Chess facebook, Chess twitter, Chess tiktok, Chess discord, Chess reddit, Ches"
        />
        <meta
          name="description"
          content="A chess social network with chess opening moves tutorials"
        />
        <meta itemProp="name" content="Grandmasters smith" />
        <meta
          itemProp="description"
          content="A chess social network with chess opening moves tutorials"
        />
        <meta
          itemProp="image"
          content="https://s3.amazonaws.com/creativetim_bucket/products/157/original/react-material-dashboard-nodejs.jpg?1664786816"
        />
        <meta name="twitter:card" content="product" />
        <meta name="twitter:site" content="@grandmasterssmith" />
        <meta
          name="twitter:title"
          content="Grandmasters smith - A chess social network with chess opening moves tutorials"
        />
        <meta
          name="twitter:description"
          content="A chess social network with chess opening moves tutorials"
        />
        <meta name="twitter:creator" content="@grandmasterssmith" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/creativetim_bucket/products/157/original/react-material-dashboard-nodejs.jpg?1664786816"
        />
        <meta property="og:url" content="https://www.url.to.be.created/" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/creativetim_bucket/products/157/original/react-material-dashboard-nodejs.jpg?1664786816"
        />
        <meta
          property="og:description"
          content="A chess social network with chess opening moves tutorials"
        />
        <meta property="og:site_name" content="Grandmasterssmith" />
      </Helmet>
      <LanguageProvider language={language} setLanguage={setLanguage}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {getRoutes(routes)}
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/authentication/sign-up" element={<Register />} />
            {/* PrivateRoute to be used for protected routes, add the protected component to the element. */}
            <Route
              path="/home"
              element={
                <PrivateRoute
                  element={Home}
                  onLogout={handleLogout}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            {/* Login route, with login page component and onLogin function. */}
            <Route path="/authentication/sign-in" element={<Login onLogin={handleLogin} />} />
            {/* Logout route, with logout page component and onLogout function. */}
            <Route path="/logout" component={handleLogout} />
            <Route
              path="/edit-profile"
              element={
                <PrivateRoute
                  element={EditProfile}
                  onLogout={handleLogout} //TODO: remove this
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route path="*" element={<Navigate to="/presentation" />} />
          </Routes>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}
