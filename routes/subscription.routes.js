import { Router } from "express";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";
import authorize from "../middleware/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GETs all subscribtions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GETs subscribtion details" });
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscribtion" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscribtion" });
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscribtion" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;
