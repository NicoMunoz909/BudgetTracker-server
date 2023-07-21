require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(cors());

//Use Routes
app.use("/", router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
