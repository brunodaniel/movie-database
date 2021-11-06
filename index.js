import express from "express";
import cors from "cors";

import filmesRoutes from "./routes/filmes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use("/filmes", filmesRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
