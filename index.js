import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});
app.get("/api/get", (req, res) => {
  res.send({ message: "hello back to nodejs" });
});
app.listen(8000, () => {
  console.log("Server is running on http://localhost:3000");
});
