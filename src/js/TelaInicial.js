import {api} from "./service.js"

const tabela = document.querySelector('[data-table]')

function templateInstanciaDeLivro(livro){

    const novaInstanciaDeLivro = document.createElement('tr');

    const tituloLivro = document.createElement('td');
    const autorLivro = document.createElement('td');
    const generoLivro = document.createElement('td');
    const anoDePublicacaoLivro = document.createElement('td');
       
    const botaoDeletar = document.createElement('td');
    const botaoEditar = document.createElement('td')
    
    tituloLivro.innerHTML = livro.titulo; 
    autorLivro.innerHTML = livro.autor;
    generoLivro.innerHTML = livro.genero;
    anoDePublicacaoLivro.innerHTML = livro.anoDeLancamento;

    botaoDeletar.innerHTML = '<button class="btn btn-danger btn-sm" data-deletar >Excluir</button>';
    botaoEditar.innerHTML = '<button class="btn btn-info btn-sm" data-editar>Editar</button>';

    novaInstanciaDeLivro.appendChild(tituloLivro);
    novaInstanciaDeLivro.appendChild(autorLivro);
    novaInstanciaDeLivro.appendChild(generoLivro);
    novaInstanciaDeLivro.appendChild(anoDePublicacaoLivro);
    novaInstanciaDeLivro.appendChild(botaoDeletar);
    novaInstanciaDeLivro.appendChild(botaoEditar);

    const tBodyElemento = tabela.querySelector('tbody');
    tBodyElemento.appendChild(novaInstanciaDeLivro);

}

/*function buscarIdDoLivro(evento){
    const linha = evento.target.
}*/

async function exibeLivros(){
    const listaDeLivros  = await api.listarLivros()

    listaDeLivros.forEach(livro => {
        templateInstanciaDeLivro(livro)
    });
    
}

function excluirElemento(evento){
    const linha = evento.target.parentNode.parentNode;
    console.log(linha);
}

exibeLivros()

tabela.addEventListener('click', (evento) => {
    const elementoClicado = evento.target.innerHTML;
    if(elementoClicado == 'Excluir'){
        excluirElemento(evento);
    }

});





