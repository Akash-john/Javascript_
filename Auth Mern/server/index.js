const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connection = require("./mongodb");

//dotenv configuration
dotenv.config();

//db connection
connection();

//middlewares
app.use(express.json());
app.use(cors);
app.use();

//port Listen function for the application
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Backend server is listening on port No ${port}`);
});
