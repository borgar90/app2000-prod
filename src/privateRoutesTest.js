// Desc: Private routes test
// Path: src/privateRoutesTest.js

// NOTE: This is a file for private routes. Could not have it in the routes
// folder because it would cause a circular dependency.
// these routes are the links in the menu on the site. They are protected
// routes that require authentication to access.

const routes = [
  {
    name: "Protected path test",
    route: "/home",
  },
  {
    name: "Social network",
    route: "/pages/social-network",
  },
];

export default routes;
