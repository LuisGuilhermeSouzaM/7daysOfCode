
//Day 1
/*
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
*/

// Day 2
/* 
let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (resposta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}
if (resposta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}
*/

// Day 3

/*
let resposta1 = prompt("Gostaria de seguir para área de Front-End ou seguir para a área de Back-End? (1 para front, 2 para back)");
let resposta2 = ""
if (resposta1 == 1) {
    resposta1 = "Front-End";
    
    resposta2 = prompt("Gostaria de aprender React ou Vue? (1 para react, 2 para Vue)");
    
    if(resposta2 == 1){
        resposta2 = "React";
    } else if(resposta2 == 2){
        resposta2 = "Vue";
    } else{
        alert("Você não digitou nenhuma resposta válida");
    }
} else if (resposta1 == 2) {
    resposta1 = "Back-End";
    
    resposta2 = prompt("Gostaria de aprender C# ou Java? (1 para C#, 2 para Java)");
    if(resposta2 == 1){
        resposta2 = "C#";
    } else if(resposta2 == 2){
        resposta2 = "Java";
    } else{
        alert("Você não digitou nenhuma resposta válida");
    }
} else{
    alert("Você não digitou nenhuma resposta válida");
}

let resposta3 = prompt(`Gostaria de se especializar em ${resposta1} e se aprofundar mais em ${resposta2} ou gostaria de se tornar FullStack? (1 para se especializar, 2 para FullStack)` )

if (resposta3 != "2" || resposta3 != "1"){
    alert("Você não digitou nenhuma resposta válida");
}  

let resposta4 = prompt("Tem mais alguma tecnologia que gostaria de se especializar?(ok para sim)");
let resposta5 = "";
while(resposta4 == "ok"){
    resposta5 = prompt("Quais tecnologias gostaria de se especializar?");
    resposta4 = prompt("Tem mais alguma tecnologia que gostaria de se especializar?(ok para sim)");
}

*/

// Day 4

/*
const maximo = 10;
const minimo = 0;

let answer = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)
console.log(answer);
let attempts = 0;
let respostaUsuario;
let TRIES = 3;
while(attempts < TRIES){
    respostaUsuario = prompt("Advinhe o numero mágico!")
    if(respostaUsuario == answer){
        alert("Parabéns, você acertou");
        break;
    } else {
        attempts++;
        if(TRIES - attempts > 0){
            alert(`Não foi dessa vez, você tem mais ${TRIES - attempts} tentativas`);
        } else {
            alert("Que pena, acabaram suas tentativas!!!")
        }
    }
}
*/

// Day 5

/*


*/
let listaDeCategorias = ["Frutas", "Latícinios", "Congelados", "Doces"]
let listaDeCompras = [
    [listaDeCategorias[0], []],
    [listaDeCategorias[1], []],
    [listaDeCategorias[2], []],
    [listaDeCategorias[3], []]
]
let comida;
let categoria;

let adicionar = prompt("você deseja adicionar uma comida na sua lista de compras? você deve responder com sim ou nao");

while (adicionar == "sim"){
    
    comida = prompt("qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria a comida se encaixa? 1 para frutas, 2 para laticínios, 3 para congelados, 4 para doces!")
    listaDeCompras[categoria - 1][1].push(comida);
    adicionar = prompt("você deseja adicionar uma comida na sua lista de compras? você deve responder com sim ou nao");
 
} 
alert(listaDeCompras);