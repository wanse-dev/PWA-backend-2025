import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../../controllers/users/";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;