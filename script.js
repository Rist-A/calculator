let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
let b3 = document.getElementById("btn3");
let b4 = document.getElementById("btn4");
let b5 = document.getElementById("btn5");
let b6 = document.getElementById("btn6");
let b7 = document.getElementById("btn7");
let b8 = document.getElementById("btn8");
let b9 = document.getElementById("btn9");
let b10 = document.getElementById("btn10");
let b11 = document.getElementById("btn11");
let b12 = document.getElementById("btn12");
let b13 = document.getElementById("btn13");
let b14 = document.getElementById("btn14");
let b15 = document.getElementById("btn15");
let b16 = document.getElementById("btn16");
let b17 = document.getElementById("btn17");
let b18 = document.getElementById("btn18");

let txt = document.getElementById("textarea");

let num1 = '';
let num2 = '';
let p_op = ''; 
let n_op = ''; 



const appendToDisplay = (value) => {
    txt.value += value;
}


const display1 = () => {txt.value+=b1.textContent;}
const display2 = () => {txt.value+=b2.textContent;}
const display3 = () => {txt.value+=b3.textContent;}
const display5 = () => {txt.value+=b5.textContent;}
const display6 = () => {txt.value+=b6.textContent;}
const display7 = () => {txt.value+=b7.textContent;}
const display9 = () => {txt.value+=b9.textContent;}
const display10 = () => {txt.value+=b10.textContent;}
const display11 = () => {txt.value+=b11.textContent;}

const display13 = () => {txt.value+=b13.textContent;}
const display14 = () => {txt.value+=b14.textContent;}



const operators = (op) => {
    if (p_op === '') {
        num1 = txt.value;
        p_op = op;
        txt.value+=op;
    } else {
        num2 = txt.value.split(p_op)[1];  
        result(); 
        p_op = op;
        txt.value+=op;
    }
}

const result = () => {
    let result;
    num2 = txt.value.split(p_op)[1]; 
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch (p_op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'number can not divide by 0';
            }
            break;
        default:
            return;
    }
    
     txt.value = result;
    num1 = result;
    num2 = '';
    p_op = '';
}


const Reset = () => {
    num1 = '';
    num2 = '';
    p_op = '';
    txt.value = '';
}


const del = () => {
    txt.value = txt.value.slice(0, -1);
}


b1.addEventListener("click", display1);
b2.addEventListener("click", display2);
b3.addEventListener("click", display3);
b5.addEventListener("click", display5);
b6.addEventListener("click", display6);
b7.addEventListener("click", display7);
b9.addEventListener("click", display9);
b10.addEventListener("click", display10);
b11.addEventListener("click", display11);

b13.addEventListener("click", display13);
b14.addEventListener("click", display14);


b8.addEventListener("click", () => operators('+'));
b12.addEventListener("click", () => operators('-'));
b15.addEventListener("click", () => operators('/'));
b16.addEventListener("click", () => operators('*'));

b4.addEventListener("click", del);  
b17.addEventListener("click", result);  
b18.addEventListener("click", result);  
