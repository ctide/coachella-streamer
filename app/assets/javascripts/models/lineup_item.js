App.Models.LineupItem = Backbone.Model.extend({
  parse: function(data) {
    this.artist = new App.Models.Artist(data.artist);
    return _.omit(data, 'artist');
  },
  toggleState: function() {
    if (this.get('enabled')) {
      App.Dispatcher.trigger('disableChannel', this);
    } else {
      App.Dispatcher.trigger('enableChannel', this);
    }
    this.set('enabled', !this.get('enabled'));
  }
});
