const UserController = require("./controllers/UserController");
const TableController = require("./controllers/TableController");
const UserAuthenController = require("./controllers/UserAuthenController");
const isAuthenController = require('./authen/isAuthenController');

module.exports = (app) => {
  /* RESTful API for users management */
  // get all users
  app.get("/users", isAuthenController, UserController.index);
  // create user
  app.post("/user", UserController.create);
  // edit user, suspend, active
  app.put("/user/:userId", UserController.put);
  // delete user
  app.delete("/user/:userId", UserController.remove);
  // get user by id
  app.get("/user/:userId", UserController.show);

  /* RESTful API for table management */
  // get all tables
  app.get("/tables", isAuthenController, TableController.index);
  // create table
  app.post("/table", TableController.create);
  // edit table
  app.put("/table/:tableId", TableController.put);
  // delete table
  app.delete("/table/:tableId", TableController.remove);
  // get table by id
  app.get("/table/:tableId", TableController.show);

  // Login
  app.post("/login", UserAuthenController.login);
};
