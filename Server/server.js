import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./src/db/connect.js";
import cookieParser from "cookie-parser";
import errorHandler from "./src/helpers/errorhandler.js";
import routes from "./src/routes/index.js";
import morgan from "morgan";

dotenv.config();

const PORT = process.env.SERVER_PORT || 8000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
const DB_CONNECTION_URI = process.env.DB_CONNECTION_URL || "mongodb://localhost:27017/task-manager-application-db";

const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandler);

// ROUTES
app.use("/api/v1", routes);

app.get("/health", (req, res) => {
  res.status(200).send({ status: "OK", message: "Server is healthy" });
});

const startServer = async () => {
  try {
    await connectToDatabase(DB_CONNECTION_URI);
    app.listen(PORT, () => console.log(`✅  Server is running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
