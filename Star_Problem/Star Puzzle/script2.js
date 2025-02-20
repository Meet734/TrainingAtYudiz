let matrix = 5;
let row = 5;
let col = 5;
let star = 1;

let region, starPos, emptyPos, cells, solution, board;
const color =[];


function startGame(event){
    event.preventDefault();
    // console.log("Hello, World!!!");
    // console.log(event);
    matrix = parseInt(document.getElementById("size").value);
    row = col = matrix;

    pickColors();
    initializeGame();
    findSolution();

    // console.log(solution);

    printBoard();
    document.getElementsByClassName("options")[0].style.display = "flex";
}

function pickColors(){
    let uniqueColor = new Set();
    for(let i=0;i<matrix;i++){
        let a = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let c = Math.floor(Math.random()*256);

        let d = Math.floor(Math.random()*10);

        if(uniqueColor.has(`rgba(${a}, ${b}, ${c}, ${d})`)){
            i--;
            continue;
        }
        color[i] = `rgba(${a}, ${b}, ${c}, ${d})`;
    }
    
}

function printGame() {
    let idx = 1;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let cellEl = document.querySelector(`.cell[row="${i}"][col="${j}"]`);
            // console.log(`.cell[row="${i}"][col="${j}"]`);
            cellEl.style.backgroundColor = region[i][j];
            cellEl.textContent = starPos[i][j] == 1 ? "❌" : idx;

            idx++;
        }
    }
}
function printBoard() {
    
    board = document.querySelector(".container");
    board.innerHTML = "";
    let idx = 1;
    for(let i=0;i<row;i++){
        let rowEl = document.createElement("div");
        for(let j=0;j<col;j++){
            let newEl = document.createElement("div");
            newEl.classList.add("cell");
            newEl.style.backgroundColor = region[i][j];
            newEl.textContent = starPos[i][j] == 1 ? "❌" : idx;
            newEl.setAttribute("row", i);
            newEl.setAttribute("col", j);

            newEl.addEventListener("click", handleClick);
            rowEl.appendChild(newEl);
            
            idx++;
        }
        board.appendChild(rowEl);
    }
    setAll();
}

function handleClick(event){
    let tempRow = event.target.getAttribute("row");
    let tempCol = event.target.getAttribute("col");

    console.log({tempRow}, {tempCol});
    let position = 1;
    let flag = true;
    for(let i=0;i<row && flag;i++){
        for(let j=0;j<col && flag;j++){
            if(i == tempRow && j == tempCol){
                console.log("I'm here...");
                flag = false;
                break;
            }
            position++;
        }
    }
    if(starPos[tempRow][tempCol] == 1){
        removeMove(position);
    }
    else{
        placeMove(position);
    }
    printGame();
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
                    if(star > matrix){
                        gameWon();
                    }
                }
                else{
                    console.log("\t\t##Star cannot be placed at this position##");
                }
            }
            idx++;
        }
    }
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
    setAll();
    for(let i=0;i<row;i++){
        let column = Math.floor(Math.random()*matrix);
        let flag = false;

        while(emptyPos[i][column] != 0){
            for(let j=0;j<col;j++){
                if(emptyPos[i][j] == 0){
                    flag = true;
                    break;
                }
            }
            if(!flag){
                for(let i=0;i<row;i++){
                    for(let j=0;j<col;j++){
                        region[i][j] = null;
                    }
                }
                findSolution();
                return;
            }
            column = Math.floor(Math.random()*matrix);
        }
        
        starPos[i][column] = 1;
        region[i][column] = color[i];
        cells[i] = 1;

        console.log(region);
        updateAll(i, column, 'add');
    }

    console.log(starPos);
    solution = JSON.parse(JSON.stringify(starPos));

    constructRegion();
    // console.log(starPos);
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
        let neighbors = new Set(); //colors in the neighbor of cell

        if(region[i][j] != null){
            continue;
        }
        
        if((i-1)>=0 && region[i-1][j] != null){
            neighbors.add(region[i-1][j])
        }
        if((j+1)<col && region[i][j+1] != null){
            neighbors.add(region[i][j+1]);
        }
        if((i+1)<row && region[i+1][j] != null){
            neighbors.add(region[i+1][j]);
        }
        if((j-1)>=0 && region[i][j-1] != null){
            neighbors.add(region[i][j-1]);
        }

        let unique = Array.from(neighbors)
        if(unique.length != 0){
            if(unique.length != neighbors.size){
                console.log("neighbors: ", neighbors, "Unique: ", unique);
            }
            region[i][j] = unique[Math.floor(Math.random()*unique.length)];
            temp++;
        }
        console.log("color: ", region);
    }
}


function getHint(){
    let position = 1;
    let anotherPosition = 1;
    let userIdx = 1;
    let solutionIdx = 1;   
    
    //check for empty board


    if(star == 1){
        for(let i=0;i<col;i++){
            if(solution[0][i] == 1){
                solutionIdx = i+1;
            }
        }
        document.getElementById("message").textContent = `💡 Place Star at ${solutionIdx} 💡`;
        return;
    }

    for(let i=0;i<row;i++){
        let isEmpty = true;

        for(let j=0;j<col;j++){
            if(starPos[i][j] != 0){
                isEmpty = false;
                userIdx = position;
            }
            position++;
        }

        for(let j=0;j<col;j++){
            if(solution[i][j] != 0){
                solutionIdx = anotherPosition;
            }
            anotherPosition++;
        }

        if(isEmpty){
            // console.log(`💡 Place Star at ${solutionIdx} 💡`);
            document.getElementById("message").textContent = `💡 Place Star at ${solutionIdx} 💡`;
            break;
        }

        if(userIdx != solutionIdx){
            // console.log(`💡 Place Star at ${solutionIdx} instead of ${userIdx} 💡`);
            document.getElementById("message").textContent = `💡 Place Star at ${solutionIdx} instead of ${userIdx} 💡`
            break;
        }
    }
}

function initializeGame(){
    star = 1;
    row = col = matrix;
    region = new Array(row);
    for (let i=0;i<row;i++) {
        region[i] = [];
        for(let j=0;j<col;j++){
            region[i][j] = null;
        }
    }
}

function getSolution(){
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            starPos[i][j] = solution[i][j];
        }
    }
    star = matrix+1;
    printGame();
}

function gameWon(){
    // printBoard();
    // console.log("\t\t🏆🏆🏆Congratulations! You have won the game🏆🏆🏆");
    
    let temp = document.createElement("p");
    temp.textContent = "🏆🏆🏆Congratulations! You have won the game🏆🏆🏆";
    board.appendChild(temp);
}