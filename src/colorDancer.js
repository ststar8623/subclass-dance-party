var MakeColorDancer = function(top, left, timeBetweenSteps) {
  this.oldSteps = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
};

MakeColorDancer.prototype = Object.create(Dancer.prototype);
MakeColorDancer.prototype.constructor = MakeColorDancer;

MakeColorDancer.prototype.step = function() {
  this.oldSteps();
  this.$node.addClass('dancer animated infinite zoomOutLeft');
};