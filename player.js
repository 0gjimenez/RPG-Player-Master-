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

let p1battle = {

  attack: function(mv){
    if (mv == 1){
      return this.moves.other();
   }
  },

  
  defend: function(atkmv){
    let rawDamge
  }

}

let phsyical = {

  razerPunch: function(){
    let baseDamage = this.stat.atk * 0.75;
    let bonus = 0.5 * this.statatk * Math.random();
    return baseDamge + bonus;
  },

  charge: function(){
    baseDamage = this.stats.atk*1
    bonus = 0.5 * this.stats.atk* Math.random();
      return baseDamge + bonus;

  },

  Gohun: function(){
    baseDamage = this.stats.atk
    bonus = 2 * this.stats.atk;
      return baseDamge + bonus;
  },

  RoundHouseKick: function(){
    baseDamage = this.stats.atk * 1.5
    bonus = 3 * this.stats.atk* Math.random(0.33);
      return baseDamge + bonus;
  },
  
  Falcon: function(){
    baseDamage = this.stats.atk * 0.5
    bonus = 1 * this.stats.atk* Math.random();
      return baseDamge + bonus;
  },

}//end of physical

let magic = {
  hydroPrump: function(){
    if(this.stats.mp >= 8){
      this.stas.mp = this.stats.mp -8;
      let tetradice = Math.random();
      let pump = Math.ceil(this.stats.sp/3);
      if(tetradice < 0.10){
        return pump;
      }
    else if(tetradice < 0.30){
      return 2*pump;
    }
    else if(tetradice < 0.60){
      return 3*pump;
    }
  }

},













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
