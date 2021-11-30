// variable will contain the number of squares of a side - i.e. 16x16
let count = 16;
// total number of blocks based on the selected count
let total = count * count;

const container = document.querySelector('#container');

// finds the percentage each block should be relative to the main container
function findPercentage(){
    let temp = 500/count;
    return (temp/500) * 100;
}

console.log(findPercentage(count + "%"));
