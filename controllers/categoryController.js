import Category from "../models/CategorySchema.js";

export const getAllCategoryList = async (req, res) => {
  try {
    const categoryList = await Category.find();
    return res.status(200).json({ data: categoryList });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const data = await Category.insertMany(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  };
}
