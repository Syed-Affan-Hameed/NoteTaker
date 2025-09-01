import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRouter from "./routes/notes.routes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5005;
app.use(express.json());
app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//mongodb+srv://syedaffanhameed2000_db_user:7fOJrBMtZ2qcIjCW@cluster0.v4rfx9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
