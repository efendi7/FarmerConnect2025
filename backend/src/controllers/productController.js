const Product = require('../models/product');

// GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found!" });

    res.status(200).json(product);
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// CREATE a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const newProduct = await Product.create({ name, price, stock });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("❌ Error creating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// UPDATE a product
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const product = await Product.findByPk(req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found!" });

    await product.update({ name, price, stock });
    res.status(200).json(product);
  } catch (error) {
    console.error("❌ Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found!" });

    await product.destroy();
    res.status(200).json({ message: "✅ Product deleted successfully!" });
  } catch (error) {
    console.error("❌ Error deleting product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
