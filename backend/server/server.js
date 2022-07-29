const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("colors");
const { auth } = require("../routers");
const { PORT_SERVER } = process.env;
console.log(PORT_SERVER);

class Server {
  constructor() {
    this.app = express();
    this.port = PORT_SERVER;
    this.path = {
      routeAuth: "api/auth",
    };

    //this.connecDB();
    this.middlewares();
    this.route();
  }

  async connecDB() {}

  middlewares() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  route() {
    this.app.use(this.path.routeAuth, auth);
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
