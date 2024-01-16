import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
// PrivateRoute component is used to protect routes that require authentication on the client side.
const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  if (isAuthenticated) {
    // If the user is authenticated, return the element.
    return <Element {...rest} />;
  } else {
    // If the user is not authenticated, redirect to the login page.
    return <Navigate to="/authentication/sign-in" />;
  }
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired, // The element to render.
  isAuthenticated: PropTypes.bool.isRequired, // A boolean indicating if the user is authenticated.
};

export default PrivateRoute;
