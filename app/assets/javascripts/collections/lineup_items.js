App.Collections.LineupItems = Backbone.Collection.extend({
  comparator: 'time',
  model: App.Models.LineupItem,
  activeItem: function() {
    return this.filter(function(lineupItem) {
      return lineupItem.get('channel') == App.Data.currentChannel
    }).filter(function(lineupItem) {
      return lineupItem.get('time') <= moment();
    }).pop();
  },
  nextUpItem: function() {
    return this.filter(function(lineupItem) {
      return lineupItem.get('channel') == App.Data.currentChannel
    }).filter(function(lineupItem) {
      return lineupItem.get('time') >= moment();
    }).shift();
  }
});
