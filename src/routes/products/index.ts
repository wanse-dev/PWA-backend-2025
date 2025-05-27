import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  getProductsByCategory,
  updateProduct,
  disableProduct,
  deleteProduct
} from "../../controllers/products/";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.get("/category/:id", getProductsByCategory);
router.put("/:id", updateProduct);
router.patch("/disable/:id", disableProduct);
router.delete("/:id", deleteProduct);

export default router;