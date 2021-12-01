// variable will contain the number of squares of a side - i.e. 16x16
let count = 16;
// total number of blocks based on the selected count
let total = count * count;
let color = '#000000';
// Stores the current mode selected (1 - normal, 2 - grayscale, 3 - rainbow, 4 - eraser)
let modeSelected = 1;


const container = document.querySelector('#container');

const reset = document.querySelector('#reset');
// reset.onclick = () => loadContainer();
reset.addEventListener('click', () =>{
    resetContainer();
});

const modes = document.querySelectorAll('.btn');
modes.forEach((mode) => {
    mode.addEventListener('click', () => {
        changeMode(mode.value);
    });
});

// finds the percentage each block should be relative to the main container
function findPercentage(){
    let temp = 500/count;
    return (temp/500) * 100;
}

// loads the container grid with divs based on the count value from the slider
function loadContainer(){
    for(let a = 0; a < total; a++){
        const block = document.createElement('div');
        let percentage = findPercentage().toString() + '%';

        block.style.height = percentage;
        block.style.width = percentage;
        block.classList.add('block');
        block.addEventListener('mouseover', () =>{
            block.style.backgroundColor = color;
        });
        container.appendChild(block);
        getCount();
    }
}

// updates the count and total when needed
function getCount(){
    const slider = document.getElementById('blockRange');
    const num = document.getElementById('slideCount');
    let numBlocks = slider.value;
    num.innerHTML = numBlocks + " x " + numBlocks;
    // updates count and total count of the blocks
    count = numBlocks;
    total = numBlocks * numBlocks;
}

// clears the container of divs then calls loadContainer() to refill it
function resetContainer(){
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.remove();
    });
    getCount();
    loadContainer();
}

function changeMode(mode){
    // checks if button clicked will change to a different mode, if not function does not change anything (same mode was selected)
    if(mode != modeSelected){
        const btns = document.querySelectorAll('.btn');
        btns.forEach((btn) => {
            btn.classList.remove('toggled');
        });
        switch(mode){
            case '1':
            const a = document.getElementById('normBut');
            a.classList.add('toggled');
            modeSelected = 1;
            const colorValue = document.getElementById('color');
            color = colorValue.value;
            break;
            case '2':
            const b = document.getElementById('grayBut');
            b.classList.add('toggled');
            modeSelected = 2;
            console.log('test');
            break;
            case '3':
            const c = document.getElementById('rainbowBut');
            c.classList.add('toggled');
            modeSelected = 3;
            break;
            case '4':
            const d = document.getElementById('eraserBut');
            d.classList.add('toggled');
            modeSelected = 4;
            color = '#ffffff';
            break;
        }
    }
}

// updates the color picker's hex value to change what colors the divs turn to
const colorValue = document.getElementById('color');
colorValue.oninput = function() {
    if(modeSelected != 4){
        color = colorValue.value;
    }
};

loadContainer();

// updates slider value on screen
const slider = document.getElementById('blockRange');
const num = document.getElementById('slideCount');
slider.oninput = function() {
    num.innerHTML = this.value + " x " + this.value;
};
// resets the grid of blocks with the updated value from the slider
slider.onchange = function(){
    num.innerHTML = this.value + " x " + this.value;
    resetContainer();
};
