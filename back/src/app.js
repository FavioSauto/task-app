import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";

// Routes imports
import taskRoutes from "./routes/tasks";

const app = express();

// Middlwares
app.use(cors());
app.use(morgan("dev"));
app.use(json());

// Routes
app.use("/api/tasks/", taskRoutes);

export default app;
