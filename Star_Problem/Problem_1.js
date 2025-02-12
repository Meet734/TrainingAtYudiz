const readline = require('readline-sync');

let row = 5;
let col = 5;
let star = 0;
const region = [
    ['Navy', 'Navy', 'Navy', 'Brown', 'Brown'],
    ['Navy', 'Navy', 'Navy', 'Brown', 'Brown'],
    ['Red', 'Green', 'Blue', 'Blue', 'Brown'],
    ['Red', 'Green', 'Blue', 'Blue', 'Brown'],
    ['Red', 'Green', 'Green', 'Blue', 'Blue']
];
const starPos = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
const emptyPos = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

function printLine(){
    console.log("-------------------------------------");
}
function printBoard(){
    let board = "";
    let idx = 1;

    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            board += ''+idx;
            board += region[i][j];
            if(starPos[i][j] == 1){
                board += "*";
            }
            board += " | ";
            idx++;
        }
        board += "\n------------------------------------\n";
    }
    console.log(board);
}


// printBoard();

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

function removeStar(){
    let position = readline.question("Enter position to remove star: ");
    removeMove(position);
}

//Remove logic
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

let win = false;
while(!win){
    printBoard();

    options();
    takeInput();
    
    // console.log(emptyPos);
    win = (star > 5);
}

if(win){
    printLine();
    console.log("\t\t###Congratulations! You have won the game##");
    printLine();
}
