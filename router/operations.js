const express = require('express');
const controller = require('../controllers/operations.js');
const validations = require('../validations/operations.js')

const router = express.Router();

const {
  getAll,
  getById,
  createOperation,
  updateOperation,
  deleteOperation
} = controller;

const {
  validateRequiredFields,
  validateFormat
} = validations;

router.post('/',validateRequiredFields,validateFormat, createOperation);
router.delete('/:id', deleteOperation);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id',validateFormat, updateOperation);

module.exports = router;