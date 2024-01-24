import express from "express";
import cors from "cors";
import voteRoute from "./router/voteRoute";

const app = express();
app.use(express.json());
app.use(cors());

// use Routers
app.use("/api/vote", voteRoute);

export default app;
