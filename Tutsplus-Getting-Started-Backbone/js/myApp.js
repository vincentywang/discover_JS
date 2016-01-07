var Model1 = Backbone.Model.extend({
	initialize: function(attrs, opts) {
		console.log('create an instance of Model1');
	}
});

var m1 = new Model1({name: 'm1'});

console.log(m1.get('name'));