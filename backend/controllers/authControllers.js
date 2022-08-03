const { request, response } = require("express");
const {
  hassPassword,
  generateJWT,
  checkPassword,
  welcomeEmailRegister,
  changuePassword,
  changuePasswordEmail,
} = require("../helpers");
const Users = require("../models/User");

const createAccount = async (req = request, res = response) => {
  try {
    const { password } = req.body;

    const passOp = await hassPassword(password);

    const user = await Users(req.body);

    user.password = passOp;
    await user.save();
    welcomeEmailRegister(user);
    res.status(201).json({
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
      res.status(202).json({
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

    res.status(200).json({
      Error: false,
      msg: "Inicio de secion completado",
      user: {
        uid,
        name,
        token: generateJWT(data),
      },
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const chaguePassword = async (req = request, res = response) => {
  try {
    const { email } = req.body;

    const user = await Users.findOne({ email });

    user.changePassword = changuePassword();

    await user.save();
    changuePasswordEmail({
      email,
      name: user.name,
      changePassword: user.changePassword,
    });
    res.json({ msg: "Hemos enviado un email con las instrucciones" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};
const validateChanguePasswordToken = async (req = request, res = response) => {
  try {
    const { changePassword } = req.params;

    const user = await Users.findOne({ changePassword });

    if (user) {
      res.json({ msg: "Token valido y el usuario existe" });
    } else {
      const error = new Error("Token no valido o es invalido");
      return res.status(400).json({ msg: error.message });
    }
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const newPassword = async (req = request, res = response) => {
  try {
    const { toke } = req.params;
    const changePassword = toke;
    const { password } = req.body;

    const user = await Users.findOne({ changePassword });
    const passOp = await hassPassword(password);

    if (user) {
      user.changePassword = null;
      user.password = passOp;
      await user.save();
      return res.json({ msg: "Contraseña cambiada correctamente" });
    } else {
      const error = new Error(
        "Vuelve a enviar la solicitud, autentificacion caducada"
      );
      return res.status(404).json({ msg: error.message });
    }
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
  chaguePassword,
  validateChanguePasswordToken,
  newPassword,
};
