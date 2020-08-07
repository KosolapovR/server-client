const express = require("express");
const app = express();

const todoList = [
  {
    name: "todo1",
    index: 0
  },
  {
    name: "todo2",
    index: 1
  },
  {
    name: "todo3",
    index: 2
  }
];

app.get("/", (req, res) => {
  res.send(todoList);
});

app.listen(process.env.PORT || 3001);
