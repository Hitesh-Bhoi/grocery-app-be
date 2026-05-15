import Product from "../models/ProductSchema.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
