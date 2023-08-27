
async function listarLivros(){

    const conexao = await fetch("http://localhost:3000/livros");

    return await conexao.json();

}

async function buscarLivroPorId(id){

    const conexao = await fetch(`http://localhost:3000/livros/${id}`);

    return await conexao.json();

}

async function cadastrarLivro(livro){

    const conexao = await fetch("http://localhost:3000/livros", {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify({
            'titulo' : livro.titulo,
            'autor' : livro.autor,
            'genero' : livro.genero,
            'anoDeLancamento' : livro.anoDeLancamento,
            'createdAt' : Date.now(),
            'updatedAt' : Date.now()
        })
    });

    return await conexao.json();

}

async function atualizarLivro(id, livro){

    const conexao = await fetch(`http://localhost:3000/livros/${id}`,{
        method : 'PUT',
        headers : {'Content-type':'application/json'},
        body : JSON.stringify({
            'titulo' : livro.titulo,
            'autor' : livro.autor,
            'genero' : livro.genero,
            'anoDeLancamento' : livro.anoDeLancamento,
            'createdAt' : livro.createdAt,
            'updatedAt' : Date.now()
        })
    });

    return await conexao.json();

}

async function deletarLivro(id){

    const conexao = await fetch(`https://localhost:3000/livro/${id}`, { method:'DELETE' });

    return await conexao.json();

}

export const api = {
    listarLivros,
    buscarLivroPorId,
    cadastrarLivro,
    atualizarLivro,
    deletarLivro
}