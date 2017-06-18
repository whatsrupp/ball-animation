(function(exports){

  function Ball(diameter){
    this.topCoord = 0;
    this.leftCoord = 0;
    this.bottomCoord = this.topCoord + diameter;
    this.rightCoord = this.leftCoord + diameter;

    this.updates = function (velocityVector){
      var x = velocityVector.x;
      var y = velocityVector.y;
      this.topCoord += x;
      this.leftCoord += y;
    }

    this.updateDisplay = function() {
      var ball = document.getElementById('ball')
      ball.style.top = this.topCoord + 'px'
      ball.style.left = this.leftCoord + 'px'
    }

    this.
  }

  exports.Ball = Ball;
})(this);
