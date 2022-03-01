const express = require("express");

const bodyParser = require("body-parser");
const { todoRouter } = require('./routes/todos.router');


const app = express();
const port = 3000 ;


app.use(bodyParser.json());


app.use('/todos', todoRouter);


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });