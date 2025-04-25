//array to store calculation history
let history = []



//addition function - adds two numbers, returns result, adds equation into history[]
function addNumbers(a,b) {
    history.push({
        operation: "addition",
        operands: [a,b],
        result: a + b
    })
    return a + b
}


//subtraction function - subtracts two numbers, returns result, adds equation to history[]
function subtractNumbers(a,b) {
    history.push({
        operation: "subtraction",
        operands: [a,b],
        result: a - b
    })
    return a - b
}


//multiplication function - multiplies two numbers, returns result, adds equation to history []
function multiplyNumbers(a,b) {
    history.push({
        operation: "multiplication",
        operands: [a,b],
        result: a * b
    })
    return a * b
}


//division function - divides numbers, returns result, adds equation to history[]
function divideNumbers(a,b) {
    history.push({
        operation: "division",
        operands: [a,b],
        result: a / b
    })
    return a / b
}


//function to show history[] at user's request
function showHistory() {
    if (history.length === 0 ) {
        return "No stored calculations"
    } else {
    return history
    }
}

