// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt(`Altura`)
const largura = prompt(`largura`)

console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt(`Ano atual`)
  const anoDeNascimento = prompt(`Ano de nascmiento`)

  console.log(anoAtual - anoDeNascimento)

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
//const peso = prompt(`Peso`)
//const altura = prompt(`Altura`)

const imc = peso / (altura * altura).toFixed(2)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt(`Qual é seu nome ?`)
const idade = prompt(`Qual é a sua idade ?`)
const email = prompt(`Qual é o seu email ?`)

const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
console.log(frase)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const corFavorita1 = prompt(`Qual sua cor favorita ?`)
const corFavorita2 = prompt(`Qual sua segunda cor favorita ?`)
const corFavorita3 = prompt(`Qual é a sua terceira cor favorita ?`)

const listaDeCores = [corFavorita1, corFavorita2, corFavorita3]
console.log(listaDeCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const frase = string
const frasetoUpperCase = frase.toUpperCase()

return frasetoUpperCase
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custoDoEspetaculo = custo
const valorCadaIngresso = valorIngresso

const quantidadeIngressos = (custoDoEspetaculo / valorCadaIngresso)
return quantidadeIngressos


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

const ehDeIgualTamanho = string1.length === string2.length
return ehDeIgualTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

const retornaPrimeiro = array[0]
return retornaPrimeiro
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

const retornaUltimo = array.pop()
return retornaUltimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui 
    const novoArray = array.slice()  
    const ultimo = novoArray.pop() 
    const primeiro = novoArray.shift()  
    novoArray.unshift(ultimo)  
    novoArray.push(primeiro) 
    return novoArray  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const ehIgual = string1.toLowerCase() === string2.toLowerCase()
return ehIgual
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt(`Digite o ano atual`))
const anoDeNascimentoUser = Number(prompt(`Qual seu ano de nascimento ?`))
const anoDeEmissaoRGUser = Number(prompt(`Qual o ano de emissão do seu RG ?`))
const idadeUser = anoAtual - anoDeNascimentoUser

const menorOuIgualA20Anos = (idadeUser <= 20) && (anoDeEmissaoRGUser + 5) <= anoAtual
const entre20E50Anos = (idadeUser > 20 && idadeUser <= 50) && (anoDeEmissaoRGUser + 10) <= anoAtual
const acimaDos50Anos = idadeUser > 50 && (anoDeEmissaoRGUser + 15) < anoAtual
console.log(menorOuIgualA20Anos || entre20E50Anos || acimaDos50Anos)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const ehBissexto = (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)
return ehBissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const maiorDe18 = (prompt(`Você tem mais de 18 anos?`))
const possuiEnsinoMedio = (prompt(`Você possui ensino médio completo?`))
const disponibilidadeTotal = (prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`))
 
const condicaoParaSerEstudante = (maiorDe18 === 'sim') && (possuiEnsinoMedio === 'sim') && (disponibilidadeTotal === 'sim') 

console.log(condicaoParaSerEstudante)



}

