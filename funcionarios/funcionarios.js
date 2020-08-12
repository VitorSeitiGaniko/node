const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

//O axios é um client http, ele faz requisições
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)



const filtroMulher = e => e.genero == 'F'
const filtroPais = e => e.pais == 'China'
const menorSalario = (acumulador, elemento) => {
   return acumulador.salario < elemento.salario ? acumulador:elemento
}

const resultado = funcionarios.filter(filtroMulher).filter(filtroPais).reduce(menorSalario)

console.log(resultado)
})