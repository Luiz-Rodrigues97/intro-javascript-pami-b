// faça uma atividade que receba duas notas de 0 a 10 
// e exiba as  seguintes mensagens para cada faixa de valores 
// nota < 5 = I, nota >= 5 e < 6.5 = R, nota > 8.5 = B
// e nota >=  8.5 MB

let entrada = require('prompt-sync')();

console.log(' programa de cálculo de notas da  ETEC');
let valor ;

valor = entrada(' digite a primeira nota:');
let n1 = parseFloat(valor);

valor = entrada('Digite a segunda nota: ');
let n2 = parseFloat(valor);

let media = (n1 + n2) / 2;

if (media < 5){
    valor ='I';
}

if (media >= 5 && media < 6.5) {
    valor ='R';
}

 if (media >= 6.5 && media < 8.5) {
    valor = 'B';
 }

 if (media >=8.5){
     valor = 'MB';
 }

console.log('A nota final é: ' + valor);




