import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import castAgency from "./routes/castAgency.route.js";
import getAllData from "./routes/getAllData.route.js";
import redisClient from "./service/redis.service.js";

dotenv.config();
const app = express();

(async () => {
  try {
    await redisClient.connect();
  } catch (err) {
    console.log(err);
  }
})();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    author: "rei_kaji",
  });
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/castagencies", castAgency);
app.use("/api/getAllData", getAllData);

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
