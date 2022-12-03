let currentValue=0;            
let numberString="";            
let currentLeftValue=0;
let symbol="";
let count=0;
function PushValue(id)
{
    //a
    numberString+=String(id);
    currentValue=parseFloat(numberString);
    let resultForm = document.getElementById("result");
    resultForm.value = numberString; 
}
function Plus()
{
    if(currentLeftValue===0){
        currentLeftValue=currentValue;
    }else{
        currentLeftValue+=currentValue;
    }
    RetentionNumber();
    symbol="plus";
}
function Minus(){
    if(currentLeftValue===0){
        currentLeftValue=currentValue;
    }else{        
        currentLeftValue-=currentValue;
    }
    RetentionNumber();
    symbol="minus";
}
function Multiplication(){
    if(currentLeftValue===0){
        currentLeftValue=currentValue;
    }else{        
        currentLeftValue*=currentValue;
    }
    RetentionNumber();
    symbol="multiplication";
}
function Division(){
    if(currentLeftValue===0){
        currentLeftValue=currentValue;
        console.log("a");
    }else{        
        console.log(currentLeftValue);
        currentLeftValue/=currentValue;
    }
    RetentionNumber();
    symbol="division";
}
function PlusMinusKey(){
    currentValue=-currentValue;
    let resultForm = document.getElementById("result");
    resultForm.value = currentValue; 
}
function RetentionNumber(){
    numberString="";
    currentValue=0;
}
function DecimalPoint(){
    numberString+=".";
    let resultForm = document.getElementById("result");
    resultForm.value = numberString; 
}
function AllClearKey() {
    numberString = "";
    currentValue = 0;
    symbol = "";
    currentLeftValue = 0;
    let resultForm = document.getElementById("result");
    resultForm.value = numberString;
}
function ClearEntryKey() {
    numberString = "";
    currentValue = 0;
    let resultForm = document.getElementById("result");
    resultForm.value = numberString;
}
function Equal() {
    switch(symbol){
    case "plus":
        currentLeftValue+=currentValue;
        break;
        case "minus":
        currentLeftValue-=currentValue;
        break;
        case "multiplication":
        currentLeftValue*=currentValue;
        break;
        case "division":
        currentLeftValue/=currentValue;
        break;
    }
    numberString="";
    currentValue=0;
    symbol="";
    let resultForm = document.getElementById("result");
    resultForm.value = currentLeftValue; 
}