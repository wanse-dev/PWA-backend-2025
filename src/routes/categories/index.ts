import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  enableCategory,
  disableCategory,
  deleteCategory,
} from "../../controllers/categories/index";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategory);
router.patch("/enable/:id", enableCategory);
router.patch("/disable/:id", disableCategory);
router.delete("/:id", deleteCategory);

export default router;
