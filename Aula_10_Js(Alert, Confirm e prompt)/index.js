window.alert('Mensagem de alert');
window.confirm('Deseja realmente apagar?');
window.prompt('Digite o seu nome');
// ^^ Mesma coisa
alert('Mensagem de alert');
confirm('Deseja realmente apagar?');
prompt('Digite o seu nome'); 

const confirma = confirm('Vai apagar mesmo?'); //Vai retornar true ou false na variável

// para mudar o valor de "500" para 500 (String para number)

let num1 = "500";         //String
num1 = parseFloat(num1); //Number