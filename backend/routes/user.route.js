import express from "express";
import User from "../modal/user.modal.js";
import bcrypt from "bcrypt";
import jwtToken from "../service/jwt.service.js";
import redisClient from "../service/redis.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(200).json({
        status: "success",
        message: "Users don't exist!",
      });
    }

    res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found!",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        status: "fail",
        message: "Incorrect password!",
      });
    }

    const token = jwtToken.createToken({ id: user._id });

    await redisClient.set(token.toString(), user._id.toString());

    res
      .header("authorization", token)
      .status(200)
      .json({
        status: "success",
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
  }
});

router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "Email already exists!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    const result = await user.save();
    // save user to database

    res.status(201).json({
      message: "User created successfully!",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
  }
});

export default router;
