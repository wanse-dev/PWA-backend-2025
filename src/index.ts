import "dotenv/config";
import routes from "./routes/index";
import connectDB from "./database";
import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000; // if PORT is not set, default to 3000

app.use(cors());
app.use(express.json());

connectDB(); // once server starts, connect to the database

app.get("/", (req, res) => {
  res.send("Server working properly!");
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
