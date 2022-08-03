const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("colors");
const dbConnection = require("../db/base");
const { auth, todo, updateUser } = require("../routers");
const { PORT_SERVER } = process.env;

class Server {
  constructor() {
    this.app = express();
    this.port = PORT_SERVER;
    this.path = {
      routeAuth: "/api/auth",
      routeTodo: "/api/todo",
      routeUpdate: "/api/updateUser",
    };

    this.connecDB();
    this.middlewares();
    this.route();
  }

  async connecDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  route() {
    this.app.use(this.path.routeAuth, auth);
    this.app.use(this.path.routeTodo, todo);
    this.app.use(this.path.routeUpdate, updateUser);
  }

  listen() {
    this.app.listen(this.port, (error) => {
      if (error) console.log(`${"algo salio mal".red}: ${error.message}`);
      console.log(
        `${"Server corriendo en el puerto:".rainbow} ${this.port.yellow}`
      );
    });
  }
}

module.exports = Server;
