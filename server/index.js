const express = require("express");
const app = express();
const bodyParser = require('body-parser')
// const cors = require('cors')
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

app.use(bodyParser.json());
// app.use(cors());

app.get("/", (req, res) => {
    res.send(todoList);
});
const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
