import express from "express";
import { 
    getCategories, 
    getCategoryById, 
    createCategory,
    updateCategory,
    disableCategory,
    deleteCategory 
} from "../../controllers/categories/index";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById)
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.patch("/disable/:id", disableCategory);
router.delete("/:id", deleteCategory);

export default router;