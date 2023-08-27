const bodyParser = require("body-parser")
const livros = require("./livrosRouter")

module.exports = app => {
    app.use(bodyParser.json())
    app.get('/', (req,res) => res.send("Bem vindo ao servidor"))
    app.use(livros)
}