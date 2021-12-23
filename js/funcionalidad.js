// ========== theme-change
window.onload = () => {
    theme(0)
}

const theme = val => {
    document.body.setAttribute('data-theme', parseInt(val)+1)
}

// ========= calc
// aux
let aux = true
let auxActions = ['.','+','-','*','/']

// buttons
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')
let button6 = document.getElementById('button6')
let button7 = document.getElementById('button7')
let button8 = document.getElementById('button8')
let button9 = document.getElementById('button9')
let button0 = document.getElementById('button0')
let buttonPoint = document.getElementById('buttonPoint')

// actions
let reset = document.getElementById('resetButton')
let del = document.getElementById('delete')
let addition = document.getElementById('addition')
let subtraction = document.getElementById('subtraction')
let divide = document.getElementById('divide')
let multiply = document.getElementById('multiply')
let equal = document.getElementById('equal')

button0.onclick = () => {
    document.calculator.ans.value += '0'
}
button1.onclick = () => {
    document.calculator.ans.value += '1'
}
button2.onclick = () => {
    document.calculator.ans.value += '2'
}
button3.onclick = () => {
    document.calculator.ans.value += '3'
}
button4.onclick = () => {
    document.calculator.ans.value += '4'
}
button5.onclick = () => {
    document.calculator.ans.value += '5'
}
button6.onclick = () => {
    document.calculator.ans.value += '6'
}
button7.onclick = () => {
    document.calculator.ans.value += '7'
}
button8.onclick = () => {
    document.calculator.ans.value += '8'
}
button9.onclick = () => {
    document.calculator.ans.value += '9'
}


addition.onclick = () => {
    aux = true
    // display vacio ??
    document.calculator.ans.value === '' ?
        document.calculator.ans.value = ''
    :
        // ultimo char = +,-,*,/,.
        auxActions.find(e => document.calculator.ans.value.substr(-1).includes(e)) ?
            document.calculator.ans.value += ''
        :
            document.calculator.ans.value += '+'
}
subtraction.onclick = () => {
    aux = true
    // display vacio ??
    document.calculator.ans.value === '' ?
        document.calculator.ans.value = ''
    :
        // ultimo char = +,-,*,/,.
        auxActions.find(e => document.calculator.ans.value.substr(-1).includes(e)) ?
            document.calculator.ans.value += ''
        :
            document.calculator.ans.value += '-'
}
divide.onclick = () => {
    aux = true
    // display vacio ??
    document.calculator.ans.value === '' ?
        document.calculator.ans.value = ''
    :
        // ultimo char = +,-,*,/,.
        auxActions.find(e => document.calculator.ans.value.substr(-1).includes(e)) ?
            document.calculator.ans.value += ''
        :
            document.calculator.ans.value += '/'
}
multiply.onclick = () => {
    aux = true
    // display vacio ??
    document.calculator.ans.value === '' ?
        document.calculator.ans.value = ''
    :
        // ultimo char = +,-,*,/,.
        auxActions.find(e => document.calculator.ans.value.substr(-1).includes(e)) ?
            document.calculator.ans.value += ''
        :
            document.calculator.ans.value += '*'
}


// equal - function
equal.onclick = () => {
    //display vacio ??
    !(document.calculator.ans.value === '') ?
        document.calculator.ans.value = eval(document.calculator.ans.value)
    :
        document.calculator.ans.value += ''
}


// point - function
buttonPoint.onclick = () => {
    // display vacio ??
    if (document.calculator.ans.value === '') {
        document.calculator.ans.value += '0.'
        // point available
    } else if (aux) {
        aux = false
        // ultimo char = +,-,*,/,.
        auxActions.find(e => document.calculator.ans.value.substr(-1).includes(e)) ?
            document.calculator.ans.value += ''
        :
            document.calculator.ans.value += '.'
    }
}

// delete - funtion
del.onclick = () => {
    let aux = document.calculator.ans.value.slice(0,-1)
    document.calculator.ans.value = aux
}

// reset - funtion
reset.onclick = () => {
    aux = true
}