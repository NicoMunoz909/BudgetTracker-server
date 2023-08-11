const { Operations } = require("../db/models");

const getAll = async (req, res) => {
  const operations = await Operations.findAll();
  res.send(operations);
};

const getById = async (req, res) => {
  try {
    const operation = await Operations.findByPk(req.params.id);
    res.send(operation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createOperation = async (req, res) => {
  const newOp = await Operations.create({ ...req.body });
  res.send(newOp);
};

const updateOperation = async (req, res) => {
  const operation = await Operations.update({ ...req.body }, { where: { id: req.params.id } });
  res.send(operation);
};

const deleteOperation = async (req, res) => {
  const operation = await Operations.destroy({ where: { id: req.params.id } });
  res.status(200).send("Deleted Succesfully");
};

module.exports = {
  getAll,
  getById,
  createOperation,
  updateOperation,
  deleteOperation,
};
