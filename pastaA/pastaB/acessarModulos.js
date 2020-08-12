//Os dois pontos serve para sair da pasta atual que vc se encontra
const moduloA = require('../../moduloA')
const moduloB = require('../../moduloB')

console.log(moduloA.bemVindo)
console.log(moduloB.bomDia)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bem vindo')
    res.end()
           
}).listen(8080)

