const { request, response } = require("express");
const { hassPassword, generateJWT, checkPassword } = require("../helpers");
const Users = require("../models/User");

const createAccount = async (req = request, res = response) => {
  try {
    const { password } = req.body;

    const passOp = await hassPassword(password);

    const user = await Users(req.body);

    user.password = passOp;
    await user.save();

    res.json({
      Error: false,
      msg: "Registro completado",
      user: {
        uid: user.id,
        name: user.name,
        token: generateJWT(user),
      },
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const loginAccount = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (await checkPassword(password, user.password)) {
      res.json({
        Error: false,
        msg: "Inicio de secion completado",
        user: {
          uid: user.id,
          name: user.name,
          token: generateJWT(user),
        },
      });
    } else {
      res.status(400).json({ Error: true, msg: "Contraseña incorrecta" });
    }
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const validateToken = async (req = request, res = response) => {
  try {
    const { uid, name } = req;
    console.log({ uid, name });
    const data = {
      id: uid,
      name,
    };

    const token = generateJWT(data);

    res.json({ Error: false, msg: "ok", uid, name, token });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

module.exports = {
  createAccount,
  loginAccount,
  validateToken,
};
