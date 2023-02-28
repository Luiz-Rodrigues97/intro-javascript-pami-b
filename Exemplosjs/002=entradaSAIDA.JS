// chmado a bbiblioteca que será utiklizado
let entrada = require('prompt-sync') ();


let nome = entrada('digite seu no,e: ');
console.log('nome digitado: ' + nome );

// toda entrada é string
let num; // criação de variavel

// entrada 
num = entrada('digite um número: ');
let n1 = parseInt(num)
 num = entrada('digite outro número: ');
let n2 = parseInt(num);
 
//processamento
let soma = n1 + n2;

//saida
console.log('A soma do nº ' + n1 + 'com o nº' + n2 + 'é' + soma);


entrada();
console.log('Fim do programa');

