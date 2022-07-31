const { request, response } = require("express");
const Todos = require("../models/Todo");

const getTodos = async (req = request, res = response) => {
  try {
    const user = req.uid;
    const todos = await Todos.find().where("user").equals(user);

    if (todos.length === 0) {
      const error = new Error(`No hay data actualmente`);
      return res
        .status(400)
        .json({ Error: true, msg: `Algo salio mal: ${error.message}` });
    }

    res.json({
      Error: false,
      msg: "get Todos",
      results: todos,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const createTodo = async (req = request, res = response) => {
  try {
    const todo = await Todos(req.body);

    todo.user = req.uid;

    const newTodo = await todo.save();

    res.status(201).json({
      Error: false,
      msg: "Todo creado",
      newTodo,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const deleteTodo = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const todo = await Todos.findById(id);
    await Todos.findByIdAndDelete(id);

    res.status(201).json({
      Error: false,
      msg: "Todo elminadao",
      todo,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const updateTodo = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const uid = req.uid;

    const updateTodo = {
      ...req.body,
      user: uid,
    };

    const todoUdate = await Todos.findByIdAndUpdate(id, updateTodo, {
      new: true,
    });

    res.status(202).json({
      Error: false,
      msg: "Todo actualizacion",
      todoUdate,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

module.exports = {
  createTodo,
  deleteTodo,
  updateTodo,
  getTodos,
};
