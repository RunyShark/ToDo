const Users = require("../models/User");
const Todos = require("../models/Todo");
const moment = require("moment");

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

const isDate = (date) => {
  if (!date) {
    throw new Error(`${date} no es una fecha`);
  }
  const fecha = moment(date);
  if (!fecha.isValid()) {
    throw new Error(`${date} no es una fecha correcta`);
  }
  return true;
};

const existeTodo = async (id) => {
  const existe = await Todos.findById(id);

  if (!existe) {
    throw new Error(`No existete ninguna to do con el id:${id}`);
  }
};

module.exports = {
  emailExists,
  emailNoExists,
  existeTodo,
  isDate,
};
