import mongoose from "mongoose";


const connect = async (dbURI) => {
  try {
    if (!dbURI) {
      throw new Error("Database connection string is missing!");
    }

    console.log("Attempting to connect to database...");
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅  Connected to database !!!");
  } catch (error) {
    console.error("❌ Failed to connect to database:", error.message);
    process.exit(1); // Exit with failure code
  }
};

export default connect;

