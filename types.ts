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
