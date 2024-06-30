// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

//Activity
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

//Symbol
function wrapAdjective(symbol = "*") {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}

