// variable will contain the number of squares of a side - i.e. 16x16
let count = 16;
// total number of blocks based on the selected count
let total = count * count;
let color = '#000000';


const container = document.querySelector('#container');

const reset = document.querySelector('#reset');
// reset.onclick = () => loadContainer();
reset.addEventListener('click', () =>{
    resetContainer();
});

// finds the percentage each block should be relative to the main container
function findPercentage(){
    let temp = 500/count;
    return (temp/500) * 100;
}

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

function getCount(){
    const slider = document.getElementById('blockRange');
    const num = document.getElementById('slideCount');
    let numBlocks = slider.value;
    num.innerHTML = numBlocks;
    // updates count and total count of the blocks
    count = numBlocks;
    total = numBlocks * numBlocks;
}


function resetContainer(){
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.remove();
    });
    getCount();
    loadContainer();

    let colorPicked = document.getElementById('color');
    color = colorPicked.value;
}

loadContainer();
const slider = document.getElementById('blockRange');
const num = document.getElementById('slideCount');
slider.oninput = function() {
    num.innerHTML = this.value;
}
