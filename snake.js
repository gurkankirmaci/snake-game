const GRID_WIDTH = 20;
const GRID_HEIGHT=20;
const GRID_SIZE = GRID_HEIGHT * GRID_WIDTH;

const snakeElement= document.querySelector("#snake-grid");
let position = (GRID_SIZE/2) -(GRID_WIDTH/2);


let createFoodposition = () =>{
   return Math.floor(Math.random() * GRID_SIZE);
}
let foodPosition = createFoodposition();

const createGrid = () => {
    for (let i = 0; i < GRID_SIZE; i++) {
        const singLeBlock = document.createElement("div");
        singLeBlock.classList.add("snake-grid-item");
        snakeElement.appendChild(singLeBlock);
    }

}

createGrid();

const createStart = (position) => {
    const startBlock = document.querySelectorAll(".snake-grid-item");
    startBlock[position].classList.add("filled");
}
createStart(position);

const foodCreate  = (position) => {
    const foodBlock = document.querySelectorAll(".snake-grid-item");
    foodBlock[position].classList.add("food");
}
foodCreate(foodPosition);

const deleteEl = (position) => {
    const deleteBlock = document.querySelectorAll(".snake-grid-item");
    deleteBlock[position].classList.remove("filled");
}

const removeFood = () => {
    const foodBlock = document.querySelector(".food");
    foodBlock.classList.remove("food");
}

const bindEvents = () => {
    document.addEventListener("keyup", (e) => {
        handleControls(e);
    });
};

const handleControls = (e) => {
    if(e.keyCode === 37){
        deleteEl(position);
        position = position -1;
        createStart(position);
    }
    if(e.keyCode === 39){
        deleteEl(position);
        position = position +1;
        createStart(position);
    }
    if(e.keyCode === 38){
        deleteEl(position);
        position = position -GRID_WIDTH;
        createStart(position);
    }
    if(e.keyCode === 40){
        deleteEl(position);
        position = position +GRID_WIDTH;
        createStart(position);
    }
    if(position == foodPosition){
        removeFood();
        foodPosition = createFoodposition();
        foodCreate(foodPosition);

    }

};
bindEvents();




