import express from "express";
import { 
    getCategories, 
    getCategoryById, 
    createCategory,
    updateCategory,
    deleteCategory 
} from "../../controllers/categories/index";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById)
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;