const fs = require('fs')

const produto = {
    nome: 'iphone', 
    preco: 4999
}

//o "stringify" vai fazer a conversão para um arquivo json

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo Salvo')
})