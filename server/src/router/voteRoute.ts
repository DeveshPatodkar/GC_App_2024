import express from "express";

export const router = express.Router();

router.get("/registerVote", (req, res) => {
  res.send("registerVote");
});

export default router;
