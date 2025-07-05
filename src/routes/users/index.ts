import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  enableUser,
  disableUser,
  deleteUser,
} from "../../controllers/users/";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.patch("/enable/:id", enableUser);
router.patch("/disable/:id", disableUser);
router.delete("/:id", deleteUser);

export default router;
