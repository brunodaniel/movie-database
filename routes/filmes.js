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
  const id = req.params.id;
  const filmeEncontrado = filmes.find((filme) => filme.id === id);
  res.send(filmeEncontrado);
});

export default router;
