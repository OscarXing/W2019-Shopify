// index.js

// Here we will import our routes and put them all under one function.

const shopRoutes = require("./products");


module.exports = function(app, db) {
  shopRoutes(app, db);
  // Other route groups go here in future
};
