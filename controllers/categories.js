const { Categories } = require("../db/models");

const getAll = async (req, res) => {
  const categories = await Categories.findAll();
  res.send(categories);
};

const getById = async (req, res) => {
  const category = await Categories.findByPk({ where: { id: req.params.id } });
  res.send(category);
};

const createCategory = async (req, res) => {
  const newCat = await Categories.create({ ...req.body });
  res.send(newCat);
};

const deleteCategory = async (req, res) => {
  const category = await Categories.destroy({ where: { id: req.params.id } });
  res.send(category);
};

module.exports = {
  getAll,
  getById,
  createCategory,
  deleteCategory,
};
