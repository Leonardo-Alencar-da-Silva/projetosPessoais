const nome = 'Gabriel'
const sobrenome = 'Nogueira'
const idade = 22
const Peso = 90
const Altura = 1.82
let ICM = Peso / (Altura * Altura)
let anoNascimento = (2022 - idade)
console.log(nome, sobrenome, "tem", idade, "anos, pesa", Peso, "kg")
console.log("tem", Altura, "de altura e seu IMC é de", ICM)
console.log(nome, "nasceu em", anoNascimento)

let a = "0"
let b = "1"
let c = "2"
let d = "3"
let e = "4"
let f = "5"
let g = "6"
let h = "7"
let i = "8"
let j = 9
let k = "10"
let l = "9"

 console.log(Number(a) * j)
 console.log(Number(b) * j)
 console.log(Number(c) * j)
 console.log(Number(d) * j)
 console.log(Number(e) * j)
 console.log(Number(f) * j)
 console.log(Number(g) * j)
 console.log(Number(h) * j)
 console.log(Number(i) * j)
 console.log(Number(l) * j)
 console.log(Number(k) * j)

 let x = prompt("digite um número")
 let y = prompt("Digite o segundo valor")
 let z = Number(x) + Number(y)
 alert(z)

 let x = parseInt(prompt("Digite um Número"))
 let z = parseInt(prompt("Digite um Número"))
 alert(x+z)
 
cor = prompt("digite a cor")
// estou informando que a cor(variavel) que esta do lado esquerdo do sinal de igual, vai ser o que esta sendo digitado no prompt que é como um box que serve para digitar o texto.
if(cor == "verde"){
    alert("proseguir");
    //if = se,  é uma condição na qual eu informo que, se avariavel e igual a cor digitada no prompt for verdadeiro, o aletrt vai me avisar para proseguir.
} else if(cor == "amarelo" ){
    alert("Atenção");
//else if= se não, é a condição na qual a informação for divergente da outra opção, nesse caso: -se a cor digitado no prompt  for o amarelo vai da o alerta.
}
else{
    alert("pare");
}
//