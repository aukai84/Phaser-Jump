//jshint esversion: 6
((Phaser, Game, CFG) => {

  if(Game === undefined){
    Game = window.Game = {};
  }

  const SCALE = 1;
  const MOVE_SPEED = 850;
  const JUMP_VELOCITY = 2950;
  // also height, gravity:9750 jumpVel:2950 = can clear 400px
  const ANIMATIONS = {
    IDLE_SPEED : 8,
    LEFT_SPEED : 8,
    RIGHT_SPEED : 8,
    JUMP_SPEED : 4,
  };

  Game.Hero = class {
    constructor(){

    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);