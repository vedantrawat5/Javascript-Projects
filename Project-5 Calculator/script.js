const userInput = document.getElementById("user-input");
var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
    expression = '';
}
function erase(){
    expression = '';
    userInput.value = expression;
}