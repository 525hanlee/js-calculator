document.querySelector('.num-pad').addEventListener('click',math);
const display = document.querySelector('.typed-num');

function math(event){
  const key = event.target
  const action = key.dataset.action
  if (key.className == 'num') {
    if (!action) {
      console.log('number key!')
    }
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'
    ) {
      console.log('operator key!')
    }
    if (action === 'decimal') {
      console.log('decimal key!')
    }
    if (action === 'clear') {
      console.log('clear key!')
    }
    if (action === 'back') {
      console.log('back key!')
    }
    if (action === 'calculate') {
      console.log('equal key!')
    }
  }
}

function doNumer(text){

}
function doOperator(operator){

}
function doZero(){

}
function doDot(){

}
function doAC(){

}
function doBack(){

}
function doEqual(){

}
