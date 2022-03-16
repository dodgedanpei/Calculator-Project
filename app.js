const plusBtn = document.getElementById('addSign');
const minusBtn = document.getElementById('minusSign');
const divideBtn = document.getElementById('divideSign');
const multiplyBtn = document.getElementById('timesSign');
const equalsBtn = document.getElementById('equalsSign');
const clearBtn = document.getElementById('clear');

const deleteBtn = document.getElementById('delete');

var inputScreen = document.getElementById("inputScreen");

const numberKeys = Array.from(document.querySelectorAll('.digit'));
numberKeys.forEach(key => key.addEventListener('click', function(e){
            if(newCalculation){
                num1 = this.textContent;
                inputScreen.textContent = this.textContent;
                newCalculation = false;
            }
            else{
            if(!num1Status){
                num1 = num1 + this.textContent;
                inputScreen.textContent += this.textContent;
            } else{
                num2 = num2 + this.textContent;
                inputScreen.textContent += this.textContent;
            }}
}))

var calcType = ''
var total = ''
var num1 = ''
var num1Status = false;
var num2 = ''
var newCalculation = true;

const reset = () => {
    newCalculation = true;
    calcType = ''
    total = ''
    num1 = ''
    num1Status = false;
    num2 = ''   
}

const clearAll = () => {
    reset()
    inputScreen.textContent = "";
} 

const addTime = () => {
    calcType = 'addition';
    num1Status = true;
    inputScreen.textContent += "+";
}

const subTime = () => {
    calcType = 'subtraction';
    num1Status = true;
    inputScreen.textContent += "-";

}

const divTime = () => {
    calcType = 'division';
    num1Status = true;
    inputScreen.textContent += "÷";
}

const multTime = () => {
    calcType = 'multiply';
    num1Status = true;
    inputScreen.textContent += "×";
}

const add = (a, b) => {
    return parseInt(a) + parseInt(b);
}

const subtract = (a, b) => {
    return parseInt(a) - parseInt(b);
}

const multiply = (a, b) => {
    return parseInt(a) * parseInt(b);
}

const divide = (a, b) => {
    if (parseInt(b) != 0){
    return parseInt(a) / parseInt(b)}
    else {
        return '0 division error.'}
    }


const operate = (calcType, a, b) => {


    if (calcType == 'addition') {
        let answer = add(a, b);
        inputScreen.textContent = answer;
        return add(a, b)
    }
    else if (calcType == 'subtraction'){
        let answer = subtract(a, b);
        inputScreen.textContent = answer;
        return subtract(a, b);
    } else if(calcType == 'division'){
        let answer = divide(a, b);
        inputScreen.textContent = answer;
        return divide(a, b);
    } else if(calcType == 'multiply'){
        let answer = multiply(a, b);
        inputScreen.textContent = answer;
        return multiply(a, b);
    }
}

const deleteLast = () => {
    console.log('??')
}
    



plusBtn.addEventListener('click', function(){
    addTime();
})

minusBtn.addEventListener('click', function(){
    subTime();
})

divideBtn.addEventListener('click', function(){
    divTime();
})

multiplyBtn.addEventListener('click', function(){
    multTime();
})

equalsBtn.addEventListener('click', function(){
    if(num1Status){
    operate(calcType, num1, num2);
    reset();
    }
})

clearBtn.addEventListener('click', function(){
    reset();
    clearAll();
})


deleteBtn.addEventListener('click', function(){
    deleteLast();
})
