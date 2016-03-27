// prototypal inheritance

var human = {
  species: "human",
  create: function(values) {
    // copy of origin instance as base to edit / add new properties
    var instance = Object.create(this);
    Object.keys(values).forEach(function(key){
      // create new property or overwrite exist property
      instance[key] = values[key];
    });
    return instance;
  },
  saySpecies: function() {
    console.log(this.species);
  },
  sayName: function() {
    console.log(this.name);
  }
};

var musician = human.create({
  species: "musician",
  playInstrument: function() {
    console.log('plays' + this.instrument);
  }
});

var will = musician.create({
  name: "Will",
  instrument: "Guitar"
});
