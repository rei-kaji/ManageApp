import mongoose from "mongoose";

const castAgencyScheme = mongoose.Schema({
  companyName: String,
  location: String,
  phoneNumber: String,
  bio: String,
  since: String,
  actorNumber: Number,
});

const CastAgency = mongoose.model("CastAgency", castAgencyScheme);

console.log("success create CastAgency");

export default CastAgency;
