var MakeColorDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="./img/colorDancer.png" alt="colorDancer" class="">');
  this.setPosition(top, left);
};

MakeColorDancer.prototype = Object.create(Dancer.prototype);
MakeColorDancer.prototype.constructor = MakeColorDancer;

MakeColorDancer.prototype.step = function() {
  this.oldStep();
  this.$node.addClass('dancer animated infinite flipOutY');
};