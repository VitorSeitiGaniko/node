/*os 3 pontos servem para indicar que serão passados varios parametros, 
não há tamanho definido*/

module.exports = function(...nomes){
    return nomes.map(nome => `Boom dia ${nome}`)
}