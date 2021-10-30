import express from "express";


const router = express.Router();

let filmes = [];

//retorna todos os filmes cadastrados
router.get("/", (req, res) => {
  console.log(filmes);
  res.send(filmes);
});

//cadastra um novo filme
router.post("/add", (req, res) => {
  const filme = req.body;
  filmes.push({ ...filme, id: Math.random() });
  res.send(`Filme ${filme.titulo} foi cadastrado com sucesso!`);
});

//retorna um filme de um ID especifico
router.get("/:id", (req, res) => {
  const idParam = req.params.id;
  const filme = filmes.find((filme) => filme.id == idParam);
  res.send(filme);
});

//exclui um filme especifico da lista
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  filmes = filmes.filter((filme) => filme.id != id);
  res.send(`Filme com o ID ${id} foi excluido`);
})

//edita um filme especifico da lista
router.put("/edit/:id", (req, res) => {
  const idParam = req.params.id;
  const filmesEdit = req.body;
  let index = filmes.findIndex(filme => filme.id == idParam);
  filmes[index] = {...filmes[index],...filmesEdit}
  res.send(`Filme com o ID ${idParam} foi alterado`);
})

export default router;
