import { api } from "./service.js";

const formularioCadastro = document.querySelector('#botao');

function getDadosDoLivro(){
    const titulo = document.querySelector('#titulo').value
    const autor = document.querySelector('#autor').value
    const genero = document.querySelector('#genero').value
    const anoDeLancamento = document.querySelector('#ano').value

    console.log(titulo)



    return {
        'titulo' : titulo,
        'autor' : autor,
        'genero' : genero,
        'anoDeLancamento' : anoDeLancamento
    };
}

formularioCadastro.addEventListener('click', async (evento) => {
    evento.preventDefault();

    const livro = getDadosDoLivro();

    await api.cadastrarLivro(livro);

    window.location = '../index.html';

});
