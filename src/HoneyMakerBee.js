var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey'
  this.honeyPot = 0;
};

// HoneyMakerBee prototype inherits from Bee, which inherits from Grub
HoneyMakerBee.prototype = Object.create(Bee.prototype);

//set honeymakerbee prototype construction fn to be equal to itself?
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//HoneyMakerBee specific methods
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++
}

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--
}
