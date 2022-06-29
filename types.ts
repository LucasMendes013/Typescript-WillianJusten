//Boolean(true / false)

let isOpen : boolean
isOpen = true


//String ('foo', "foo", `foo`)
let message : string
message = 'full'

//Number (int, float, hexadecimal, binário)
let total : number
total = 0

//Array (type[])
let items: number[]
items = [1,2,3]

let tota2l : Array<number>
tota2l = [1,2,3]


//tuple
let title : [number, string]
title = [1,'ola']

//enum
enum Colors {
  white = '#fff',
  balck = '#000'
}

//any
let coisa = any
coisa = [1]

//void(vazio, nao retorna nada)
function logger(){
  console.log('foo')
}

//null / undefined
type Bla = string | undefined

//never
function error(): never {
  throw new Error('error')
}

//object
let cart : object

cart = {
  key: 'yellow'
}


//type interference
//o typescript sabe que aquilo é uma string, e se voce tentar o reestipular, com algo além de string, não conseguirá
let message2 = 'mensagem indefinida'
message2 =  'string' 

//assim como, ao dizer que algo é string, nao se pode usar metoodos e propriedades fora de string



//Type Alias(varios tipos em um local apenas)
//Caso voce queira estipular que uma propriedade de uma function por exemplo pode ser number ou string, coloque:   : type | type    |
function doisTipos(tipo1: string | number, tipo2: string | number) {
  console.log(`Tipo 1 é ${tipo1} e tipo 2 é ${tipo2}`)
}
doisTipos('ola','mundo')
doisTipos(1,2)


//Usando o type Alias, estipulamos que ele é string e também que ele recebe apenas um desses valores, se o usuario colocar 'ios' no na execucao da funcion,  nao funcionara, mesmo que o tipo esteja correto, a informacao dentro dele nao está

type Plataform = 'windows' | 'linux' | 'Mac Os'
//è interessante também, que como o TS jáa sabe que plataform é string, nao precisamos colocar isso novamente,basta dizer que é :
function renderPlataform(plataform : Plataform){
  return plataform
}

renderPlataform('')