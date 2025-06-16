import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
