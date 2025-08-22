import { Router } from "express";
const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "GETs all users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "GETs a user" });
});

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