import express from "express";
import Post from "../modal/post.modal.js";
import CastAgency from "../modal/castAgency.modal.js";
import User from "../modal/user.modal.js";
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
