let order = [];
let clickedOrder = [];
let score = 0;

//0 green
//1 blue
//2 red
//3 yellow

const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

let randomOrder = ()=>{
    let sequence = Math.round(Math.random() * 4);
    order = sequence;
    clickedOrder = [];

    for(let i = 0; i < order.length; i++){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 250);
}

let checkingOrder = () =>{
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Next Level... `);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkingOrder()
    },250);
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return blue;
    } else if(color == 2){
        return red;
    } else if(color == 3) {
        return yellow
    }
}
