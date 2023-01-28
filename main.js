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
    if (operator == 'addition'){
        return addition(num1,num2);
    }
    else if (operator =='subtraction'){
        return subtraction(num1,num2);
    }
    else if (operator =='multiplication'){
        return multiplication(num1,num2);
    }
    else if (operator =='division'){
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