//generic stats object

let p1Name = "Rhino";

let p1Stats = {
  hp : 100,
  my : 80,
  atk : 10,
  def : 60,
  sp : 10,
}

let p1Moves = {
  charge: function(){
    baseDamage = this.stats.atk*1
    bonus = 0.5 * this.stats.atk* Math.random();
      return baseDamge + bonus;

  },

  Gohun: function(){
   bonus = 2 * this.stats.atk;
      return bonus;
  },

  RoundHouseKick: function(){
    baseDamage = this.stats.atk * 1.5
    bonus = 3 * this.stats.atk* Math.random(0.33);
      return baseDamge + bonus;
  },
  FalconPunch: function(){
    baseDamage = this.stats.atk * 0.5
    bonus = 1 * this.stats.atk* Math.random();
      return baseDamge + bonus;
  }
}

let p1battle = {

  attack: function(mv){
    if (mv == 1){
      return this.moves.Charge();
   }
   if (mv == 2){
    return this.moves.Gohun();
 }
  if (mv == 3){
    return this.moves.RoundHouseKick();
  }
  if (mv == 4){
    return this.moves.FalconPunch();
  }
  },
  defend: function(atkmv){
    let rawDamge = atkmv;
    let totalDamage = rawDamge - this.stats.def;
    if(totalDamage <=0){
      this.stats.hp = this.stats.hp - 1;
    }
    else{
      this.stats.hp = this.stats.hp - totalDamage;
    }
  }

}




//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  battle:p1Battle
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
   bonus = 2 * this.stats.atk;
      return bonus;
  },

  RoundHouseKick: function(){
    baseDamage = this.stats.atk * 1.5
    bonus = 3 * this.stats.atk* Math.random(0.33);
      return baseDamge + bonus;
  },
  
  FalconPunch: function(){
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



}//end of magic










let p2Name = "Scorpion";

let p2Stats = {
  hp : 120,
  my : 60,
  atk : 30,
  def : 45,
  sp : 5,

}
let p2Moves = {
  Earthquake: function(){
    baseDamge = 1.25 *
  }
}



let player2 = {
  name: p2Name,
  stats: p2Stats,
  moves: p2Moves,
  battle:p2Battle
}