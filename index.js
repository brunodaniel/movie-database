import express from "express";
const cors = require("cors");

import filmesRoutes from "./routes/filmes.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/filmes", filmesRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
