const nome01 = 'Caio';
const sobrenome01 = 'Breno';
const idade01 = 25;

const nome02 = 'João';
const sobrenome02 = 'Vitor';
const idade02 = 25;


// Criando um objeto para agrupar

const pessoa1 = {
    nome: 'Caio',
    sobrenome: 'Breno',
    idade: 25
};

const pessoa2 = {
    nome: 'João',
    sobrenome: 'Vitor',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log()

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);


// Uma função que cria um objeto

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa3 = criaPessoa ('Karem','Paulino',19);
const pessoa4 = criaPessoa ('Caio','Carvalho',19);
const pessoa5 = criaPessoa ('João','Vitor',19);
const pessoa6 = criaPessoa ('Deogo','Primo',19);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);
console.log(pessoa6);

// Uma função dentro de um objeto

const pessoa10 = {
    nome: 'Raquel',
    sobrenome: 'Ribeiro',
    idade: 19,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
}

pessoa10.fala();