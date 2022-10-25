/*
    Luiz Otávio Miranda tem 30 anos, pesa 84 kg
    tem 1.80 de altura e seu IMC é de 25.925925925925924
    Luiz Otávio nasceu em 
 */

const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(nome, sobreNome,'tem', idade,'anos, pesa', peso,'Kg');
console.log('tem', altura,'de altura e seu IMC é de', imc,);
console.log(nome,'nasceu em', anoNascimento);
console.log();

// Exemplo concatenando
console.log(nome +' '+ sobreNome +' tem '+ idade + ' anos, pesa '+ peso +' Kg ');
console.log('tem '+ altura +' de altura e seu IMC é de '+ imc);
console.log(nome + ' nasceu em '+ anoNascimento);
console.log();

// Template Strings (Recomendavel)
console.log(`${nome} ${sobreNome} tem ${idade} anos pesa ${peso} Kg`);
console.log(`tem altura de ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);