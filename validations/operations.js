const validateRequiredFields = (req, res, next) => {
  if (!req.body.concept || !req.body.amount || !req.body.date || !req.body.type) {
    return res.status(400).send("Missing fields");
  }
  return next();
};

const validateFormat = (req, res, next) => {
  if (typeof req.body.amount !== "number" || req.body.amount <= 0) {
    return res.status(400).send("Amount is wrong");
  }
  if (req.body.type !== "Income" && req.body.type !== "Expense") {
    return res.status(400).send('Type must be "Income" or "Expense"');
  }
  return next();
};

module.exports = {
  validateRequiredFields,
  validateFormat,
};
