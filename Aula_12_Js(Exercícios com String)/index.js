let umaString = "Um \"texto\""; // Isso me permite colocar aspas de outra forma
console.log(umaString);

// Strings são indexaveis
//               01234567
let umaString2 = "Um texto"; 
console.log(umaString2.charAt(4)); // Me retorna a letra na posição 4

// Formas de concatenação
console.log(umaString.concat('  em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`); // Melhor forma

