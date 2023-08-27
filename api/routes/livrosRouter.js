const {Router} = require("express")
const LivroController = require("../controllers/LivroController")

const router = Router()

router.get("/livros", LivroController.listarLivros)
router.get("/livros/:id",LivroController.buscarLivroPorId)
router.post("/livros",LivroController.cadastrarLivro)
router.put('/livros/:id',LivroController.atualizarLivro)
router.delete('/livros/:id',LivroController.deletarLivro)

module.exports = router