//classical prototypal

function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value : ctor,
      enumerable : false,
      writable : true,
      configurable : true
    }
  });
}

// super class

var Person = function(name) {
  this.name = name.toLowerCase();
};

Person.prototype.sayName = function() {
  console.log("Hi my name is " + this.name);
};

Person.prototype.shoutName = function() {
  console.log("Hi my name is " + this.name + "!");
};

// child class

var Musician = function(name, instrument) {
  Musician.super_.call(this, name);
  this.instrument = instrument;
};

inherits(Musician, Person);

Musician.prototype.getInstrument = function() {
  console.log(this.instrument);
};

Musician.prototype.shoutName = function() {
  console.log("DUDE! my name is " + this.name + "!!!!!!");
};