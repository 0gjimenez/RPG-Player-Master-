//generic stats object

let p1Name = "Raiden";

let p1Stats = {
  hp : 100,
  my : 80,
  atk : 10,
  def : 60,
  sp : 10,
}

let p2Name = "Scorpion";

let p2Stats = {
  hp : 120,
  my : 60,
  atk : 30,
  def : 45,
  sp : 5,

}

let battle = {

  attack: function(){},
  defend: function(){}

}



















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}
