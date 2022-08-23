function players(name){
    let PlayerList = {name};
    return {PlayerList};
};

let Pscore = 0;
let Cscore = 0;

const game = (function gameState(){

let turn = true;

let winstates = function winif(){
   if(gameboard[0] + gameboard[1] + gameboard[2] ===3 || 
      gameboard[3] + gameboard[4] + gameboard[5] ===3 || 
      gameboard[6] + gameboard[7] + gameboard[8] ===3 ||
      gameboard[0] + gameboard[3] + gameboard[6] ===3 ||
      gameboard[1] + gameboard[4] + gameboard[7] ===3 ||
      gameboard[2] + gameboard[5] + gameboard[8] ===3 ||
      gameboard[0] + gameboard[4] + gameboard[8] ===3 ||
      gameboard[2] + gameboard[4] + gameboard[6] ===3){
        gameReset();
       return Pscore = Pscore +1;
   } else if(
    gameboard[0] + gameboard[1] + gameboard[2] ===-3|| 
    gameboard[3] + gameboard[4] + gameboard[5] ===-3|| 
    gameboard[6] + gameboard[7] + gameboard[8] ===-3||
    gameboard[0] + gameboard[3] + gameboard[6] ===-3||
    gameboard[1] + gameboard[4] + gameboard[7] ===-3||
    gameboard[2] + gameboard[5] + gameboard[8] ===-3||
    gameboard[0] + gameboard[4] + gameboard[8] ===-3||
    gameboard[2] + gameboard[4] + gameboard[6] ===-3){
        gameReset();
        return Cscore = Cscore -1;
    } else{
        return null;
    };
   };

let gameboard =  [0,0,0,
                  0,0,0,
                  0,0,0];

const gameReset = function Reset(){

    gamebuttons.forEach(function(square){
        square.classList.remove('X');
        square.classList.remove('O');
    });

return gameboard =  [0,0,0,
                        0,0,0,
                        0,0,0];


};
const gamebuttons = document.querySelectorAll('.square');

const showBoard = function show(){
    return Pscore;
};


const Advance = function move(Pos,ID){
    Posit = Pos -1;
    if (gameboard[Posit] === 0){
    gameboard.splice(Posit,1,ID);
    } else{
        alert('You cannot claim this space.')
    };
};



const startGame = function start(){
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
            winstates();
        });
    });
};

const cpAdvance = function compPlay(){
    Pos = Math.round(Math.random()*9);
    console.log(Pos);
    Advance(Pos,-1);
    const aisquare = document.getElementById(Pos);
    console.log(aisquare);
    ID = - 1;
    if (ID ===1) {
        aisquare.classList.add('X');
    } else{
        aisquare.classList.add('O');
    }
    };

return {gameReset, showBoard, Advance, startGame, cpAdvance, winstates};
})();