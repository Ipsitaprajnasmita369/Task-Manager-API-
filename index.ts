
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskroutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
app.use(express.json());

// *Simple root route*
app.get("/", (req: Request, res: Response) => {
  res.send("Task Manager API is running!");
});

// Mount other routes
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});