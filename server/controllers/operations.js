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
    type: req.body.type,
    category: req.body.category,
    amount: req.body.amount,
    date: req.body.date
  };
  const sql = `INSERT INTO operations (type, category, amount, date) VALUES('${expense.type}', '${expense.category}', '${expense.amount}', '${expense.date}')`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(`Insert succesful ${result}`);
  })
}

const updateOperation = (req,res) => {
  const expense = {
    type: req.body.type || undefined,
    category: req.body.category || undefined,
    amount: req.body.amount || undefined,
    date: req.body.date || undefined
  };
  const sql = 'UPDATE operations' + 
  type? `SET type = '${expense.type}'` : "" +
  category? `SET category = '${expense.category}'` : "" +
  amount? `SET amount = '${expense.amount}'` : "" +
  date? `SET date = '${expense.date}'` : "" +
  `WHERE id=${req.params.id}`;
  console.log(sql);
  // db.query(sql, (err, result) => {
  //   if(err) throw err;
  //   res.send(result);
  // })
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