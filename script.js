function players(name){
    let PlayerList = {name};
    return {PlayerList};
};



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
    ID = 1;
    Posit = Pos -1;
    if (gameboard[Posit] === 0){
    gameboard.splice(Posit,1,ID);
    } else{
        alert('You cannot claim this space.')
    };
};

const startGame = function start(){
    const gamebuttons = document.querySelectorAll('.square');

    gamebuttons.forEach(function(square){
        square.addEventListener('click', function(e){
            Pos = e.target.id;
            ID = 1;

            Advance(Pos,ID);
            if (ID ===1) {
                square.classList.add('X');
            } else{
                square.classList.add('O');
            }
            console.log(Pos);
        });
    });
};

const cpAdvance = function compPlay(){
    Pos = Math.random()*9;
    console.log(Pos);
    Advance(Pos,-1);
    };

return {gameReset, showBoard, Advance, startGame, cpAdvance};
})();