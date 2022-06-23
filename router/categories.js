const express = require('express');
const controller = require('../controllers/categories.js');
// const validations = require('../validations/categories.js')

const router = express.Router();

const {
  getAll,
  getById,
  createCategory,
  deleteCategory
} = controller;

// const {
//   validateRequiredFields,
//   validateFormat
// } = validations;

router.post('/', createCategory);
router.delete('/:id', deleteCategory);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;