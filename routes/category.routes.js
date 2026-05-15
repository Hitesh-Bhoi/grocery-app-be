import { Router } from "express";
import { createCategory, getAllCategoryList } from "../controllers/categoryController.js";
const routes = Router();

routes.get("/all", getAllCategoryList);
routes.post("/create", createCategory);

export default routes;