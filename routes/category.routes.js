import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategoryList,
  getCategoryById,
  updateCategory,
} from "../controllers/categoryController.js";
const routes = Router();

routes.post("/create", createCategory);
routes.get("/all", getAllCategoryList);
routes.get("/:id", getCategoryById);
routes.put("/:id", updateCategory);
routes.delete("/:id", deleteCategory);

export default routes;
