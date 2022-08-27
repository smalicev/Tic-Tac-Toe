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
    } else if( gameboard[0] !=0 &&
        gameboard[1] !=0 && 
        gameboard[2] !=0 && 
        gameboard[3] !=0 && 
        gameboard[4] !=0 && 
        gameboard[5] !=0 && 
        gameboard[6] !=0 && 
        gameboard[7] !=0 && 
        gameboard[8] !=0){
        gameReset();
        return alert("Draw!")
    } else {
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

return gameboard =      [0,0,0,
                        0,0,0,
                        0,0,0];


};
const gamebuttons = document.querySelectorAll('.square');

const showBoard = function show(){
    return Pscore;
};

let canmove = false;

const Advance = function move(Pos,ID){
    if (gameboard[Pos] === 0){
    gameboard.splice(Pos,1,ID);
    canmove = true;
    } else if (gameboard[Pos] != 0){
        canmove = false;
        alert('You cannot claim this space.')
    } else{
        return
    };
};



const startGame = function start(){
    gamebuttons.forEach(function(square){
        square.addEventListener('click', function(e){
            Pos = e.target.id;
            ID = 1;
            Advance(Pos,ID);
            console.log(gameboard);
            if (ID ===1 && canmove === true) {
                square.classList.add('X');
                if( gameboard === [0,0,0,0,0,0,0,0,0]){
                    return null;
                } else {
                cpAdvance();
                }
            } else if(ID === -1 && canmove === true){
                square.classList.add('O');
            } else{
                return;
            }
            winstates();
            
        });
    });
};

const cpAdvance = function compPlay(){
    function getAllIndexes(arr, val) {
        var indexes = [], i = -1;
        while ((i = arr.indexOf(val, i+1)) != -1){
            indexes.push(i);
        }
        return indexes;
    }
    console.log(gameboard)
    let indexes = getAllIndexes(gameboard, 0);
    zerlen = indexes.length;
    console.log(zerlen);
    console.log(indexes);
    Pos = indexes[Math.round(Math.random()*(zerlen-1))];
    console.log(Pos)
    if (Pos === undefined){
        return null;
    }else {
        ID = - 1;
        Advance(Pos,ID);
        console.log(Pos);
        const aisquare = document.getElementById(Pos);
        if (ID ===1 && canmove === true) {
            aisquare.classList.add('X');
        } else if (ID ===-1 && canmove === true) {
            aisquare.classList.add('O');
        } else{
            return;
    };
    };
};

return {gameReset, showBoard, Advance, startGame, cpAdvance, winstates};
})();