const express = require('express');
const cors = require('cors')

const app = express();

require('dotenv').config();

const mongoConnection = require('./model');
const AssetsController = require('./routes/assets');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send('This tool manages and keep a record of all laptops assigned to Employees');
});

app.use("/asset", AssetsController);

app.listen("3000", () => {
    console.log("Server started at port 3000");
});