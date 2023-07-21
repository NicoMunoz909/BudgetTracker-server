const { Operations } = require("../db/models");

const getAll = async (req, res) => {
  const operations = await Operations.findAll();
  res.send(operations);
};

const getById = async (req, res) => {
  const operation = await Operations.findByPk({ where: { id: req.params.id } });
  res.send(operation);
};

const createOperation = async (req, res) => {
  const newOp = await Operations.create({ ...req.body });
  res.send(newOp);
};

const updateOperation = async (req, res) => {
  const operation = await Operations.update(
    { ...req.body },
    { where: { id: req.params.id } }
  );
  res.send(operation);
};

const deleteOperation = async (req, res) => {
  const operation = await Operations.destroy({ where: { id: req.params.id } });
  res.send(operation);
};

module.exports = {
  getAll,
  getById,
  createOperation,
  updateOperation,
  deleteOperation,
};
