const express = require('express');
const cors = require('cors');
const db = require('./config/database');

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

app.listen(`3000`, () => {
  console.log(`Server started on port 3000`);
})