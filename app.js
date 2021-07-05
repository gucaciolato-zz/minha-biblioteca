// pegar o input
// se sim, mostra as categorias disponíveis
// se não, mostra os todos os livros em ordem crescente de páginas
const livros = require('./database')
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Aventura', ' | Filosofia', ' | Economia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Essa são todas os livros disponíveis:')
    console.table(livrosOrdenados)
}
