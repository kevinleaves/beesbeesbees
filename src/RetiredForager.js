var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.color = 'grey'
  this.canFly = false;
};

// set descendant prototype to a new instance of the parent class
RetiredForagerBee.prototype = new ForagerBee();

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// retiredForagerBee specific methods
RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead'
}

RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure)
}
