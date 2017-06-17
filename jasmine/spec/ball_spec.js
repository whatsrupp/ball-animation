describe('Ball', function() {
  var loopFactory;
  beforeEach(function(){
    ball = new Ball();
  });

  it('#starts in the top left of the container', function() {
    expect(ball.topCoord).toEqual(0);
    expect(ball.leftCoord).toEqual(0);
  });

  describe('#generate', function(){

  });

  describe('#update', function(){
    it('updates x coordinates with a vector', function(){
      vector = {
        x: 1,
        y: 1
      }
      initial = ball.topCoord;
      ball.updates(vector);
      final = ball.topCoord;
      difference = final-initial;
      expect(difference).toEqual(1);
    })
  });
})
