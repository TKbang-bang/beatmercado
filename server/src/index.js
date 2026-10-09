import "dotenv/config";
import express from "express";
import cors from "cors";

import router from "./router.js";

// creating express application
const app = express();

// setters
app.set("PORT", process.env.PORT);

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["POST"],
  }),
);

// routes
app.use(router);

// starting server
app.listen(app.get("PORT"), () =>
  console.log(`server on port: ${app.get("PORT")}`),
);
