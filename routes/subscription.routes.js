import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GETs all subscribtions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GETs subscribtion details" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new subscribtion" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscribtion" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscribtion" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET all user subscribtion" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscribtion" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;
