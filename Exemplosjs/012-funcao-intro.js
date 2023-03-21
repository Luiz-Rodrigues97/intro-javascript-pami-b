let entrada = require('prompt-sync')();

//função sem parâmetro e sem retorno
function data (){
    const timelapsed = Date.now();
    const hoje= new Date(timelapsed);
    console.log('Hoje é: ' + hoje.toutcstring());
     
}
// função com parâmetro sem retomrno 
function caracterAleatorio () {
    const charcters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const caracter = charcters.charAt(MAth.floor(Math.random() * (61-0) + 0));
    console.log(caracter);

}


//função com parâmetro sem retorno 
function oláNome (nome){
    console.log('olá' + nome);

}
//função com parâmetro com retorno
function soma (n1,n2){
      return n1 + n2;
}
 //chamada de função sem prametro e sem retormbo
 data();

 //cahamada de função sem parametroe com retorno 
 console.log(caracterAleatorio());

 //chamada de função com parametro sem retorno
 olaNome('Luiz Fernando');
 
 //chamada de função com parametro e com retorno
 conet resultado = soma('1', '2');
 console.log(resultado);
