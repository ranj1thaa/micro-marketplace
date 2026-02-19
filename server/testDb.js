const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://r17ranjitha_db_user:UNstWIjhshS5INz1@reputationroots.idnjryd.mongodb.net/?appName=ReputationRoots";

mongoose.connect(MONGOURI)
  .then(() => {
    console.log("MongoDB connected successfully!");
    process.exit(0);
  })
  .catch(err => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
