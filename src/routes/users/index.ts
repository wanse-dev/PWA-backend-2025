import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  enableUser,
  disableUser,
  updateUser
} from "../../controllers/users/";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.patch("/enable/:id", enableUser);
router.patch("/disable/:id", disableUser);
router.delete("/:id", deleteUser);

export default router;