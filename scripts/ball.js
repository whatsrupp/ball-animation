(function(exports){

  function Ball(){
    this.topCoord = 0
    this.leftCoord = 0

    this.updates = function (velocityVector){
      var x = velocityVector.x
      var y = velocityVector.y
      this.topCoord += x;
      this.leftCoord += y;
    }

    this.generate = function(){

    }
  }

  exports.Ball = Ball;
})(this);
