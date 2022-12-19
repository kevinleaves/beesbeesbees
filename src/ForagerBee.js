var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

// to inherit, set descendent prototype to a new instance of the parent class
ForagerBee.prototype = new Bee();

// set decendent constructor equal to
ForagerBee.prototype.constructor = ForagerBee;

// forager bee specific methods
ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure)
}