
/**
 *  Basic Modular approach
 */

(function(){

  var people = {
    people:[],
    template: $('#people-template').html(),
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom: function() {
      this.$el = $('#peopleModule');
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.template = this.$el.find('#people-template').html();
    },
    bindEvents: function() {
      this.$button.on('click', this.addPerson.bind(this)); // jQuery will change contact, using bind to keep contact
      this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
    },
    addPerson: function() {
      this.people.push(this.$input.val());
      this.render(); // after every change, render dom
      this.$input.val('');
    },
    deletePerson: function(event) {
      var $remove = $(event.target).closest('li');
      var i = this.$ul.find('li').index($remove);
      this.people.splice(i, 1);
      this.render();
    },
    render: function() {
      var data = {
        people: this.people
      };
      this.$ul.html(Mustache.render(this.template, data));
    }
  };

  people.init();

})();
