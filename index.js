import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});
app.get("/api/get", (req, res) => {
  res.send({ message: "hello back to nodejs" });
});
app.get("/api/ta", async (req, res) => {
  const apiResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await apiResponse.json();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
