import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";

import authRoutes from "./routes/auth.route.js";
// import redisClient from "./service/redis.service.js";
import agencyRoutes from "./routes/castAgency.route.js";
import actorRoutes from "./routes/actor.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();
const app = express();

// (async () => {
//   try {
//     await redisClient.connect();
//   } catch (err) {
//     console.log(err);
//   }
// })();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    author: "rei_kaji",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/agency", agencyRoutes);
app.use("/api/actors", actorRoutes);

app.use("/", userRoutes);

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_HOST);
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port " + process.env.PORT + "...");
    });
  } catch (error) {
    console.log("Connecting server is failed. Error: ", error);
  }
};

startServer();
