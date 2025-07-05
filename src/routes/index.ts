import express from "express";
import categoryRouter from "./categories";
import productRouter from "./products";
import userRouter from "./users";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);

export default router;
