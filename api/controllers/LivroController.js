const database = require("../models")

class LivroController{

    static async listarLivros(req,res){
        try{

            const listaDeLivros = await database.Livros.findAll()

            return res.status(200).json(listaDeLivros)

        }catch(error){

            return res.status(500).json(error.message)

        }
        
    }

    static async buscarLivroPorId(req,res){
        const {id} = req.params

        try{

            const livroProcurado = await database.Livros.findOne( {  where: {id : Number(id)} } )
            
            return res.status(200).json(livroProcurado)

        }catch(error){

            return res.status(500).json(error.message)

        }

    }

    static async cadastrarLivro(req,res){

        const novoLivro = req.body

        try{
            
            const novoLivroCadastrado = database.Livros.create(novoLivro)

            return res.status(200).json(novoLivroCadastrado)

        }catch(error){

            return res.status(500).json(error.message)

        }

    }

    static async atualizarLivro(req,res){

        const novoLivro = req.body
        const {id} = req.params

        try{

            const livroAtualizado = await database.Livros.update(novoLivro, {where: {id:id}})
            
            return res.status(200).json(livroAtualizado)

        }catch(error){

            return res.status(500).json(error.message)

        }

    }

    //delete
    static async deletarLivro(req,res){

        const {id} = req.params

        try{

            const livroDeletado = database.Livros.destroy( { where : { id:id } } )

            return res.status(200).json(livroDeletado)

        }catch(error){

            return res.status(500).json(error.message)

        }

    }
}

module.exports = LivroController