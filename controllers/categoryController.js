import Category from "../models/CategorySchema.js";

export const createCategory = async (req, res) => {
  try {
    const isCategoryExists = await Category.exists({
      name: { $in: req?.body?.map((item) => item?.name) },
    });
    if (!req.body || req.body.length === 0 || !Array.isArray(req.body)) {
      return res
        .status(400)
        .json({ message: "Please provide category details" });
    } else if (
      req.body.some(
        (item) =>
          !item.name ||
          !item.slug ||
          typeof item.slug !== "string" ||
          typeof item.name !== "string",
      )
    ) {
      return res.status(400).json({
        message: "Each category must have valid fields",
      });
    } else if (isCategoryExists) {
      return res.status(400).json({ message: "Category already exists" });
    }
    const data = await Category.insertMany(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

export const getAllCategoryList = async (req, res) => {
  try {
    const categoryList = await Category.find();
    return res.status(200).json({ data: categoryList });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id);
    return res.status(200).json({ data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.status(404).json({ message: "Category not found" });
    } else if (
      !req.body.name ||
      !req.body.slug ||
      typeof req.body.slug !== "string" ||
      typeof req.body.name !== "string"
    ) {
      return res.status(400).json({
        message: "Category must have valid fields",
      });
    }
    return res.status(200).json({ data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
