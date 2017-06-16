(function(exports){

  init = function(){
    animateButton = document.getElementById('animate-button')
    animateButton.onClick = function(){
      moveBall();
    }
  }

  moveBall= function(){
    var ball = document.getElementById('ball');
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

  exports.init = init;
  exports.moveBall = moveBall;
})(this)


window.addEventListener('load', init);

window.addEventListener('load', moveBall);
