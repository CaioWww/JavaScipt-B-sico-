const numero = Number(prompt ('Digite um número:')); // Prompt pega uma string, então estamos convertendo ela pra number
const numeroTitulo = document.getElementById('numero-titulo'); // Pega um elemento lá do HTML pelo id
const text = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

text.innerHTML += `<p> Raiz quadrada:           ${numero ** 0.5}. </p>`
text.innerHTML += `<p> ${numero} é inteiro:     ${Number.isInteger(numero)} </p>`;
text.innerHTML += `<p> É NaN:                   ${Number.isNaN(numero)}     </p>`;
text.innerHTML += `<p> Arredondado para baixo:  ${Math.floor(numero)}.      </p>`;
text.innerHTML += `<p> Arredondado para cima:   ${Math.ceil(numero)}.       </p>`;
text.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}.       </p>`;

// text.innerhtml > Escreve dentro do html diretamente do JavaScrip