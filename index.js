// Your code here
function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style="*"){
    return function(adjective = "special"){
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a/b
    }
}

let actionApplyer = function(startI, arrFunc){
    let a = startI
    for (let i = 0; i < arrFunc.length; i++) {
         a = arrFunc[i](a)    
    }
    return a
}