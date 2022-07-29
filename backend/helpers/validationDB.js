const Users = require("../models/User");
const Todos = require("../models/Todo");

const emailExists = async (email = "") => {
  const existe = await Users.findOne({ email });

  if (existe) {
    throw new Error(
      `El correo: ${email} ya esta registrado, intenta con otro correo`
    );
  }
};

const emailNoExists = async (email = "") => {
  const existe = await Users.findOne({ email });

  if (!existe) {
    throw new Error(
      `El correo: ${email} no existe, verifica que este bien escrito`
    );
  }
};

module.exports = {
  emailExists,
  emailNoExists,
};
