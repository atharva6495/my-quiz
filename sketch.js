var form;
var canvas;
var database , answer, allPlayers, playerCount, gameState=0, question, player, game;

function setup(){
  canvas = createCanvas(850,400);

  database=firebase.database();
  game= new Game();
  game.getState();
  game.start();

  
}


function draw(){
  background("pink");

  if (playerCount===4){

    game.update(1);

  }

  if (gameState === 1 ){
     
    clear();
    game.play();

  }
  
}
