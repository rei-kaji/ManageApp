import dotenv from "dotenv";
import { verifyToken, isTokenExpired } from "../service/jwt.service.js";
import redisClient from "../service/redis.service.js";

dotenv.config();

const auth = async (req, res, next) => {
  const token = req.header("authorization");
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGVmNTk2NDlhNWFmYmViYmRiNDVhZSIsImlhdCI6MTY3NTU2NjA1MSwiZXhwIjoxNjc1NTY3ODUxfQ.9zTm4IsSKJMRQctkmEmdNv-IbUSorlybyxCWPnISMVY";
  // console.log("token", token);

  const redisToken = await redisClient.get(token);
  // console.log("redisToken", redisToken);

  if (!redisToken) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized!",
    });
  } else {
    try {
      const decoded = verifyToken(token);

      if (isTokenExpired(token)) {
        await redisClient.del(token);
        return res.status(401).json({
          status: "fail",
          message: "Unauthorized!",
        });
      }

      req.user = decoded.id;

      next();
    } catch (err) {
      return res.status(500).json({
        status: "fail",
        message: "Unauthorized!",
      });
    }
  }
};

export default auth;
