const mongoose = require("mongoose");

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });

    isConnected = true;

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    throw err;
  }
}

mongoose.connection.on("connected", () => {
  console.log("🟢 MongoDB Connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("🟡 MongoDB Disconnected");
  isConnected = false;
});

mongoose.connection.on("error", (err) => {
  console.error("🔴 MongoDB Error:", err);
});

module.exports = connectDB;