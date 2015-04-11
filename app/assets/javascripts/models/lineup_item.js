App.Models.LineupItem = Backbone.Model.extend({
  parse: function(data) {
    this.artist = new App.Models.Artist(data.artist);
    return _.omit(data, 'artist');
  },
  setState: function(enabled) {
    this.set('enabled', enabled);
    if (enabled) {
      App.Dispatcher.trigger('enableChannel', this);
    } else {
      App.Dispatcher.trigger('disableChannel', this);
    }
  }
});
