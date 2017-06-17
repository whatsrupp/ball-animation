(function(exports){

  init = function(){
    animateButton = document.getElementById('animate-button')
    animateButton.onclick = function(){
      moveBall();
    }
  }

  moveBall= function(){
    var ball = getBallElement();
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame(){
      if (pos==350){
        clearInterval(id);
      }else{
        pos++;
        ball.style.top=pos + 'px';
        ball.style.left=pos + 'px';
      }
    }
  }

  updateBallPosition = function (){
    ball.style.top= pos + 'px';
    ball.style.left= pos + 'px';
  }

  updateFrame= function(){

  }


  getBallElement = function (){
    return document.getElementById('ball');
  }



  exports.init = init;
  exports.moveBall = moveBall;
})(this)


window.addEventListener('load', init);
