import express from "express";
import Post from "../models/post.modal.js.js";
import CastAgency from "../models/castAgency.modal.js.js";
import User from "../models/user.modal.js.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const castAgencyData = await CastAgency.find();
  const postsData = await Post.find();
  const userData = await User.find();

  res.status(200).json({
    message: "All data fetched successfully",
    userData,
    castAgencyData,
    postsData,
  });
});

export default router;
