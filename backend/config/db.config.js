import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useNewUrlParse is a flag that tells the parser to use the new, updated,
      useUnifiedTopology: true,
      // useUnifiedTopology is a flag that tells the driver to use the new Server Discover and Monitoring engine.
    })
    .then(() => console.log("connected to mongo"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

export default connectDB;
