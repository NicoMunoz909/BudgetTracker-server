const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const router = require('./router');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

//Connect DB
db.connect((err) => {
  if(err){
    throw(err);
  }
  console.log('MySql connected...');
})

//Use Routes
app.use('/api', router);


app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})