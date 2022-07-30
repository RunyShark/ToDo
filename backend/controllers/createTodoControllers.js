const { request, response } = require("express");
const Todos = require("../models/Todo");

const getTodos = async (req = request, res = response) => {
  try {
    const todos = await Todos.find();

    if (todos.length === 0) {
      const error = new Error(`No hay data actualmente`);
      return res
        .status(400)
        .json({ Error: true, msg: `Algo salio mal: ${error.message}` });
    }

    res.json({ Error: false, msg: "get Todos", results: todos });
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
    res.json({ msg: "deleteTodo" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ Error: true, msg: `Algo no salio mal ${error.message}` });
  }
};

const updateTodo = async (req = request, res = response) => {
  try {
    res.json({ msg: "updateTodo" });
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
