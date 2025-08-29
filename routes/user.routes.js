import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "CREATEs new user" });
});

userRouter.put("/", (req, res) => {
  res.send({ title: "UPDATEs a user" });
});

userRouter.delete("/", (req, res) => {
  res.send({ title: "DELETEs a user" });
});

export default userRouter