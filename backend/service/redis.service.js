import redis from "redis";
import ioRedis from "ioredis";
import dotenv from "dotenv";

dotenv.config();
console.log("process.env.REDIS_HOST: ", process.env.REDIS_HOST);
// const redisClient = redis.createClient({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
// });

const redisClient = new ioRedis(process.env.REDIS_URL);

redisClient.on("connect", () => {
  console.log("Redis client connected");
});

redisClient.on("error", (err) => {
  console.log(`Something went wrong on redisClient.on:  ${err}`);
});

export default redisClient;
