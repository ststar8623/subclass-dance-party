var MakeBreakDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/breakDancer.png" alt="breakDancer">');
  this.setPosition(top, left);
};

MakeBreakDancer.prototype = Object.create(Dancer.prototype);
MakeBreakDancer.prototype.constructor = MakeBreakDancer;

MakeBreakDancer.prototype.step = function() {
  this.oldStep();
  this.$node.addClass('dancer animated infinite fadeInLeft');
};