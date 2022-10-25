let num1 = prompt('Digite o primeiro número:'); // As variáveis recebem o valor digitado
let num2 = prompt('Digite o segundo número: ');// O valor naturalmente vem como string

num1 = parseFloat(num1); //Aqui convertemos para numer
num2 = parseFloat(num2);
resultado = num1 + num2; // Aqui foi feita a soma 
alert(`A soma dos números é: ${resultado}`); // Aqui o valor é exibido na tela
alert(`A soma dos números é: ${num1 + num2}`); // podemos colocar a expressão diretamente dentro do ${}