const board = [];

function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId);

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else{
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);

    if(clickedElement.innerText !== undefined){

    }

    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];
    
    if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert(`${topLeft} is the winner`);
        reset();
    }
    if(middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        alert(`${middleLeft} is the winner`);
        reset();
    }
    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`${bottomLeft} is the winner`);
        reset();
    }
    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner`);
        reset();
    }
    if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert(`${topCenter} is the winner`);
        reset();
    }
    if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`${topRight} is the winner`);
        reset();
    }
    if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner`);
        reset();
    }
    if(bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight){
        alert(`${bottomLeft} is the winner`);
        reset();
    }
    
    let boardFull = true;
    for(let i = 0; i <= 8; i++){
        if(board[i] === undefined){
            boardFull = false;
        }
    }
    if(boardFull === true){
        alert("Cat's game, there is no winner");
        reset();
    }
}

function reset(){
    document.location.reload(true);
}


