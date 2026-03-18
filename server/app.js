import { register } from "./routes/register.js";
import { getRooms } from "./routes/getRooms.js";

import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({status: 200});
});

app.get("/getrooms", async (req, res) => {
  let allRooms = await getRooms();
  res.json(allRooms);
});

app.post("/register", async (req, res) => {
    let answer = await register(req.body);
    res.json(answer);
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
