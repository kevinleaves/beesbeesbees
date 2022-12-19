var Bee = function() {
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing'
};

Bee.prototype = new Grub(); //Bee prototype inherits from grub
Bee.prototype.constructor = Bee;

// Set Bee specific methods below:
