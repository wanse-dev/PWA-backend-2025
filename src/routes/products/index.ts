import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  getProductsByCategory,
  updateProduct,
  enableProduct,
  disableProduct,
  deleteProduct,
} from "../../controllers/products/";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/category/:id", getProductsByCategory);
router.put("/:id", updateProduct);
router.patch("/enable/:id", enableProduct);
router.patch("/disable/:id", disableProduct);
router.delete("/:id", deleteProduct);

export default router;
