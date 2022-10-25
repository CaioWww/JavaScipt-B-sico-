function saudacao(nome){
    return (`Bom dia ${nome}!`);
}

saudacao('Karem');

const variavel = saudacao('Caio');
console.log(variavel);

function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(10, 5));


// Função anônima
const raiz = function (n){
    return n ** 0.5;
};
console.log(raiz(121));