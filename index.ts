const input1 = document.getElementById('num1') as HTMLInputElement
const input2 = document.getElementById('num2')  as HTMLInputElement
const button = document.getElementById('button')  as HTMLInputElement

function somar(num1 : number,num2 : number){
  return num1 + num2
}

button.addEventListener('click', function() {
  console.log(somar(Number(input1.value), Number(input2.value)))
})