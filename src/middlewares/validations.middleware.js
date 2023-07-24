exports.validProduct = (req, res, next) => {
  const { name, price } = req.body;

  if (!name) {
    return res.status(400).json({
      status: 'error',
      message: 'the name is required',
    });
  }

  if (!price) {
    return res.status(400).json({
      status: 'error',
      message: 'the price is required',
    });
  }

  next();
};
