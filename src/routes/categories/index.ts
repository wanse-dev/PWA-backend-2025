import express from "express";
import { getCategories, getCategoryById, createCategory } from "../../controllers/categories/index";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById)
router.post("/", createCategory);

export default router;