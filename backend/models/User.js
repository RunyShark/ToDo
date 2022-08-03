const { Schema, model } = require("mongoose");

const UserShema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default:
      "https://www.ucal.edu.pe/sites/default/files/user-3995d1ed5f9b6ea6ef9c7bc9ead47415_1.jpg",
  },
  changePassword: {
    type: String,
    default: null,
  },
});

module.exports = model("Users", UserShema);
