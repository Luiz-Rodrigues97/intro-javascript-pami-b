let entrada = require('prompt-sync')();

function soma (numerops =[0]){
    let resultado = 0;
    forb (let i in numeros) {
        resuktado += numeros [i];
    } 
    return resultado;
}

let listaNum = [];
let num = 0;

do {
    num = entrada('digite um numero para somar ou 0 para encerrar:');
    if (num === '0') {
        break;    
    }
    listaNum.push(parseInt(num));
    while (num !== '0');
    
    const total = soma(listaNum);
    console.log('Total da soma : ' + total);
}
