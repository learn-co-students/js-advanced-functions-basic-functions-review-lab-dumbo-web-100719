// Your code here
function saturdayFun(string="roller-skate"){
     return `This Saturday, I want to ${string}!`
}

let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }

let Calculator = {
    add: function add(a, b) {
        return a + b},
    subtract: function subtract(a, b) {
        return a - b},
    multiply: function multiply(a, b) {
        return a * b},
    divide: function divide(a, b) {
            return a / b}
    
}

function actionApplyer(int, arr){
    if(arr.length === 0){
        return int
    } else{
        return ((int * 2 + 1000) % 7
        )}
}
