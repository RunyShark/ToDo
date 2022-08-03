const { request, response } = require("express");
const User = require("../models/User");

const updateInfoUser = async (req = request, res = response) => {
  try {
    const uid = req.uid;
    const _id = uid;

    const updateUser = {
      ...req.body,
    };

    const todoUdate = await User.findByIdAndUpdate(_id, updateUser, {
      new: true,
    });

    res.json({ msg: todoUdate });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

module.exports = {
  updateInfoUser,
};
