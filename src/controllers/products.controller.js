const Product = require('../models/product.model');

exports.findProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        status: true,
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'products retrieved successfully!',
      result: products.length,
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
      error,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, ingredients, image, description, price, quantity } = req.body;
    const product = await Product.create({
      name,
      ingredients,
      image,
      description,
      price,
      quantity,
    });

    res.status(201).json({
      status: 'succes',
      message: 'product created successefully!',
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'something went very wrong!',
      error,
    });
  }
};

exports.findProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        id,
        status: true,
      },
    });

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: `product with id ${id} not found!`,
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'product retrived successully!',
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'somethingwent very wong!',
      error,
    });
  }
};

exports.updatedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, price, isNew } = req.body;
    const product = await Product.findOne({
      where: {
        id,
        status: true,
      },
    });

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: `product with is ${id} not found!`,
      });
    }

    const productUpdated = await product.update({ quantity, price, isNew });

    res.status(200).json({
      status: 'success',
      Message: 'produc updated successfully!',
      product: productUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        id,
        status: true,
      },
    });
    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: `product with id ${id} not found!`,
      });
    }

    await product.update({ status: false });

    res.status(200).json({
      status: 'success',
      message: 'product deleted successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 'fail',
      Message: 'hello from delete route ',
      error,
    });
  }
};
