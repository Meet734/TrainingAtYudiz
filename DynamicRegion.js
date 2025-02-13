const readline = require('readline-sync');

let matrix = 5;
let row = 5;
let col = 5;
let star = 1;

let region, starPos, emptyPos, cells;
// const region = Array.from({ length: row }, () => Array(col).fill(null));
const color = ['red', 'white', 'blue', 'green', 'navy', 'yellow', 'black', 'silver', 'copper'];

// const cells = new Array(row*col);
// cells.fill(0);

// let starPos = Array.from({ length: row }, () => Array(col).fill(0));
// let emptyPos = Array.from({ length: row }, () => Array(col).fill(0));

function printLine(){
    console.log("-------------------------------------");
}

function printBoard() {
    let board = "";
    let idx = 1;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            board += '' + idx;
            board += region[i][j];
            if (starPos[i][j] == 1) {
                board += "*";
            }
            board += " | ";
            idx++;
        }
        board += "\n------------------------------------\n";
    }
    console.log(board);
}

function options(){
    console.log("1. Add Star");
    console.log("2. Remove Star");
    console.log("3. Exit");
}

function takeInput(){
    let choice = readline.question("Enter your choice: ");
    switch(choice){
        case '1':
            addStar();
            break;
        case '2':
            removeStar();
            break;
        case '3':
            process.exit();
            break;
        default:
            console.log("Invalid choice");
    }
}

function addStar(){
    let position = readline.question("Enter position to place star: ");
    placeMove(position);
}

function placeMove(position){
    let idx = 1;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(idx == position){
                if(starPos[i][j] == 1){
                    console.log("\t\t##Star already present at this position##");
                }
                else if(emptyPos[i][j] == 0){
                    starPos[i][j] = 1;
                    star++;
                    updateAll(i, j, 'add');
                }
                else{
                    console.log("\t\t##Star cannot be placed at this position##");
                }
            }
            idx++;
        }
    }
}

function removeStar(){
    let position = readline.question("Enter position to remove star: ");
    removeMove(position);
}

function removeMove(position){
    let idx = 1;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(idx == position){
                if(starPos[i][j] == 0){
                    console.log("\t\t##Star not present at this position##");
                }
                else{
                    starPos[i][j] = 0;
                    star--;
                    updateAll(i, j, 'remove');
                }
            }
            idx++;
        }
    }
}

function updateAll(p, q, op){
    let val = star;
    if(op === 'remove'){
        val = -emptyPos[p][q];
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(i == p && j == q){

                if((i-1)>=0 && (j-1)>=0 && (region[i-1][j-1] != region[p][q])){
                    emptyPos[i-1][j-1] += val;
                }
                if((i-1)>=0 && (j+1)<col && (region[i-1][j+1] != region[p][q])){
                    emptyPos[i-1][j+1] += val;
                }
                if((i+1)<row && (j-1)>=0 && (region[i+1][j-1] != region[p][q])){
                emptyPos[i+1][j-1] += val;
                }
                if((i+1)<row && (j+1)<col && (region[i+1][j+1] != region[p][q])){
                    emptyPos[i+1][j+1] += val;
                }
            }
            if(i == p || j == q){
                emptyPos[i][j] += val;
            }
            if((i != p && j != q) && region[i][j] === region[p][q]){
                emptyPos[i][j] += val;
            }
        }
    }
}

function findSolution(){
    for(let i=0;i<row;i++){
        let column = Math.floor(Math.random()*matrix);
    
        while(emptyPos[i][column] != 0){
            column = Math.floor(Math.random()*matrix);
        }
        
        starPos[i][column] = 1;
        region[i][column] = color[i];
        cells[i] = 1;

        console.log(region);
        updateAll(i, column, 'add');
    }

    console.log(starPos);
    constructRegion();
    setAll();
}

function setAll(){
    starPos = new Array(row);
    for (let i=0;i<row;i++) {
        starPos[i] = [];
        for(let j=0;j<col;j++){
            starPos[i][j] = 0;
        }
    }
    emptyPos = new Array(row);
    for (let i=0;i<row;i++) {
        emptyPos[i] = [];
        for(let j=0;j<col;j++){
            emptyPos[i][j] = 0;
        }
    }
    cells = new Array(row*col).fill(0);
}

function constructRegion(){
    let temp = 0;
    while(temp < (row*col-row)){
        let cellPos = Math.floor(Math.random()*(cells.length));
        let i = Math.floor(cellPos/col); //row of cell
        let j = cellPos%col; //column of cell
        let neighbors = new Array(); //colors in the neighbor of cell

        if(region[i][j] != null){
            continue;
        }
        
        if((i-1)>=0 && region[i-1][j] != null){
            neighbors.push(region[i-1][j])
        }
        if((j+1)<col && region[i][j+1] != null){
            neighbors.push(region[i][j+1]);
        }
        if((i+1)<row && region[i+1][j] != null){
            neighbors.push(region[i+1][j]);
        }
        if((j-1)>=0 && region[i][j-1] != null){
            neighbors.push(region[i][j-1]);
        }

        if(neighbors.length != 0){
            region[i][j] = neighbors[Math.floor(Math.random()*neighbors.length)];
            temp++;
        }
        // console.log("color: ", region);
    }
}

function initializeGame(){
    matrix = readline.question("Enter Matrix size: ");
    while(matrix < 5 || matrix > 9){
        matrix = readline.question("Enter Matrix size: ");
    }

    row = col = matrix;
    region = new Array(row);
    for (let i=0;i<row;i++) {
        region[i] = [];
        for(let j=0;j<col;j++){
            region[i][j] = null;
        }
    }
    setAll();
}

let win = false;

initializeGame();

findSolution();

while(!win){
    printBoard();

    options();
    takeInput();
    
    console.log(emptyPos);
    console.log(star);
    win = (star > matrix);
}

if(win){
    printLine();
    console.log("\t\t###Congratulations! You have won the game##");
    printLine();
}