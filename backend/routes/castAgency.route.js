import express from "express";
import CastAgency from "../modal/castAgency.modal.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

// companyName: String,
// location: String,
// phoneNumber: Number,
// bio: String,
// since: Date,
// actorNumber: Number,

router.get("/", auth, async (req, res) => {
  const userId = req.user;
  const { companyName } = req.body;

  CastAgency.find(companyName ? { companyName: companyName } : {})
    .then((result) => {
      res.status(200).json({
        status: "success",
        castAgency: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong on CastAgency.find!",
        err,
      });
    });
});

router.post("/add-castagency", auth, async (req, res) => {
  const { companyName, location, phoneNumber, bio, since, actorNumber } =
    req.body;

  // console.log("companyName", companyName);
  try {
    const existingCastAgency = await CastAgency.findOne({ companyName });
    // console.log("existingCastAgency", existingCastAgency);
    if (existingCastAgency) {
      return res.status(400).json({
        status: "fail",
        message: "This CastAgency has already exists!",
      });
    }

    const castAgency = new CastAgency({
      companyName: companyName,
      location: location,
      phoneNumber: phoneNumber,
      bio: bio,
      since: since,
      actorNumber: actorNumber,
    });

    const result = await castAgency.save();

    res.status(201).json({
      message: "CastAgency created successfully!",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong on CastAgency.findOne!",
      error,
    });
  }
});

router.post("/update-castagency", auth, async (req, res) => {
  const { companyName, location, phoneNumber, bio, since, actorNumber } =
    req.body;

  console.log("companyName", companyName);
  try {
    const existingCastAgency = await CastAgency.findOne({
      companyName,
      phoneNumber,
    });
    console.log("existingCastAgency", existingCastAgency);
    if (!existingCastAgency) {
      return res.status(400).json({
        status: "fail",
        message: "This CastAgency hasn't exists!",
      });
    }

    const result = await CastAgency.replaceOne(
      { companyName: companyName, phoneNumber: phoneNumber },
      {
        companyName: companyName,
        location: location,
        phoneNumber: phoneNumber,
        bio: bio,
        since: since,
        actorNumber: actorNumber,
      }
    );

    res.status(201).json({
      message: "This CastAgency updated successfully!",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong on CastAgency.replaceOne!",
      error,
    });
  }
});

export default router;
