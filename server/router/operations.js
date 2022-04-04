const express = require('express');
const controller = require('../controllers/operations.js');

const router = express.Router();

const {
  getAll,
  getById,
  createOperation,
  updateOperation,
  deleteOperation
} = controller;

router.post('/', createOperation);
router.delete('/:id', deleteOperation);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id', updateOperation);

module.exports = router;