const db = require('../config/database');

const getAll = (req, res) => {
  const sql = `SELECT * FROM categories`;
  db.query(sql, (err, result) => {
    if(err) {
      return res.status(400).send(err.sqlMessage);
    };
    return res.send(result);
  })
}

const getById = (req,res) => {
  const sql = `SELECT * FROM categories WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
    if(err) {
      return res.status(400).send(err.sqlMessage);
    };
    return res.send(result);
  })
}

const createCategory = (req,res) => {
  const category = {
    name: req.body.name
  };
  const sql = `INSERT INTO categories (name) VALUES('${category.name}')`;
  db.query(sql, (err, result) => {
    if(err) {
      return res.status(400).send(err.sqlMessage);
    };
    return res.send(`Insert succesful ${result}`);
  })
}

const deleteCategory = (req,res) => {
  const sql = `DELETE FROM categories WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
    if(err) {
      return res.status(400).send(err.sqlMessage);
    };
    return res.send('Deleted succesfully');
  })
}

module.exports = {
  getAll,
  getById,
  createCategory,
  deleteCategory
}