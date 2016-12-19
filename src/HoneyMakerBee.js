var HoneyMakerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  //this.color is inherited from Bee
  this.honeyPot = 0;
};

//Bee.prototype.eat is inherited from Grub
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};