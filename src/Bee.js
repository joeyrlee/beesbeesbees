var Bee = function() {
  Grub.call(this)

  this.age = 5;
  this.color = 'yellow';
  //this.food is inherited from Grub 
  //via the Grub call with Bee as the context
  this.job = 'keep on growing';
}

//Bee.prototype.eat is inherited from Grub
Bee.prototype = Object.create(Grub.prototype);
//Point the Bee constructor back to itself
Bee.prototype.constructor = Bee;