// Array no java começa com ZERO

const alunos = ['Caio', 'João', 'Karem', 'Raquel'];
console.log(alunos);
console.log(alunos[3]);

// Editando um elemento de um Array
alunos[3] = 'Raquelinda';
console.log(alunos);

// Acrecentando um elemento
alunos[4] = 'Piranha';
console.log(alunos);

// Para saber o tamanho do array
console.log(alunos.length);

// Colocar um elemento ao final do array
alunos.push('Diogo');
console.log(alunos);

// Colocar um elemento ao início do array
alunos.unshift('Juliana');
console.log(alunos);

// Para remover um elemento do fim do array
alunos.pop();
console.log(alunos);

// Para remover um elemento ao início do array
alunos.shift();
console.log(alunos);

// Deletar o conteúdo de um elemento sem apagar seu endereço
delete alunos[0];
console.log(alunos);

// Tal variável é um Array? (True False)
console.log(alunos instanceof Array);