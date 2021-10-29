import express from "express";

const router = express.Router();

let filmes = [];

router.get("/", (req, res) => {
  console.log(filmes);
  res.send(filmes);
});

router.post("/", (req, res) => {
  const filme = req.body;

  filmes.push({ ...filme, id: Math.random() });
  res.send(`Filme ${filme.titulo} foi cadastrado com sucesso!`);
});

router.get("/:id", (req, res) => {
  const idParam = req.params.id;
  const filme = filmes.find((filme) => filme.id == idParam);
  res.send(filme);
});

export default router;
