const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Data connected");
  } catch (error) {
    console.log("Data  connexion failed", error);
  }
};

module.exports = connectDB;
