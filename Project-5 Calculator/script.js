const userInput = document.getElementById("user-input");
var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    expression = '';
    userInput.value eval(expression);
}
function erase(){
    expression = '';
    userInput = expression;
}