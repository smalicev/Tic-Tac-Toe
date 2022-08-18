function players(name){
    let PlayerList = {name};
    let ID = 1
    return {PlayerList, ID};
};

function computerAI(){
    let ID = -1;
    return {ID}
}


const game = (function gameState(){
let gameboard =  [0,0,0,
                  0,0,0,
                  0,0,0];

const gameReset = function Reset(){
   return gameboard =  [0,0,0,
                        0,0,0,
                        0,0,0];
};

const showBoard = function show(){
    return console.log(gameboard);
};


const Advance = function move(Pos,ID){
    if (gameboard[Pos] === 0){
    gameboard.splice(Pos,1,ID);
    } else{
        alert('You cannot claim this space.')
    }
}

const startGame = function start(){
    const gamebuttons = document.querySelectorAll('.square');

    gamebuttons.forEach(function(square){
        square.addEventListener('click', function(e){
            Pos = e.target.id;
            console.log(Pos);
            return {Pos}
        });
    });
}
return {gameReset, showBoard, Advance, startGame};
})();