const db = require('../config/database');

const getAll = (req, res) => {
  const sql = `SELECT * FROM operations`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  })
}

const getById = (req,res) => {
  const sql = `SELECT * FROM operations WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  })
}

const createOperation = (req,res) => {
  const expense = {
    concept: req.body.concept,
    amount: req.body.amount,
    date: req.body.date,
    type: req.body.type
  };
  const sql = `INSERT INTO operations (concept, amount, date, type) VALUES('${expense.concept}', '${expense.amount}', '${expense.date}', '${expense.type}')`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(`Insert succesful ${result}`);
  })
}

const updateOperation = (req,res) => {
  const expense = {...req.body};
  const sql = `UPDATE operations SET ? WHERE id='${req.params.id}'`
  db.query(sql, expense, (err, result) => {
    if(err) throw err;
    res.send(result);
  })
}

const deleteOperation = (req,res) => {
  const sql = `DELETE FROM operations WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send('Deleted succesfully');
  })
}

module.exports = {
  getAll,
  getById,
  createOperation,
  updateOperation,
  deleteOperation
}