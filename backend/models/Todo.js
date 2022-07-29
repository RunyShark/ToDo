const { Schema, model } = require("mongoose");

const TodoShema = Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
});

module.exports = model("Todos", TodoShema);
