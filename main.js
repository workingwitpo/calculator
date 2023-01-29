function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}


function operate(operator,num1,num2){
    if (operator == 'add'){
        return addition(num1,num2);
    }
    else if (operator =='subtract'){
        return subtraction(num1,num2);
    }
    else if (operator =='multiply'){
        return multiplication(num1,num2);
    }
    else if (operator =='divide'){
        return division(num1,num2);
    }
}

function clickButton(event){
    const content = event.textContent;
    let theDisplay = document.getElementById("display").append(content);
}

function clearButton(){
    let theDisplay = document.getElementById("display").innerHTML = "";
}

function delButton(){
    let theDisplay = document.getElementById("display").innerHTML;
    if (theDisplay != ""){
        let delVal = theDisplay.slice(0,theDisplay.length-1)
        document.getElementById("display").innerHTML = delVal;
    
    }
}

let currentNumber = 0;
let nextNumber = 0;
let operator; 
function operateButton(event){
    nextNumber = currentNumber;
    operator = String(event.className);
    currentNumber = parseInt(document.getElementById("display").innerHTML);
    document.getElementById("display").innerHTML = "";
}
function equalsButton(){
    nextNumber = parseInt(document.getElementById("display").innerHTML)
    let answer = operate(operator,currentNumber,nextNumber);
    document.getElementById("display").innerHTML = answer;
}