App.Collections.LineupItems = Backbone.Collection.extend({
  comparator: 'time',
  model: App.Models.LineupItem
});
