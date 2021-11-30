// variable will contain the number of squares of a side - i.e. 16x16
let count = 16;
// total number of blocks based on the selected count
let total = count * count;

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
            block.style.backgroundColor = 'black';
        });
        container.appendChild(block);
    }
}


function resetContainer(){
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.style.backgroundColor = 'white';
    });
}

loadContainer();
