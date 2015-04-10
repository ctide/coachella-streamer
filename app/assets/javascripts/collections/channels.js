App.Collections.Channels = Backbone.Collection.extend({
  one: function() {
    return this.get('1');
  },
  two: function() {
    return this.get('2');
  },
  three: function() {
    return this.get('3');
  }
});
