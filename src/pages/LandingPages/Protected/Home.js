// Home.js
import React from "react";
import PropTypes from "prop-types";
// test component for protected routes
const Home = ({ onLogout }) => {
  const handleLogout = () => {
    // Perform logout logic and call the onLogout function
    onLogout();
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

Home.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Home;
