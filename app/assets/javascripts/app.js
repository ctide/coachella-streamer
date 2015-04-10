(function() {
  var setupViews = function() {
    var ScheduleView = React.createFactory(ScheduleComponent);
    var scheduleView = ScheduleView({collection: App.Data.friday});
    React.render(scheduleView, $('.contents')[0]);
  }

  var setupSchedule = function() {
    App.Data.channels = new App.Collections.Channels([
      {id: 1, name: 'Channel 1', url: ''},
      {id: 2, name: 'Channel 2', url: ''},
      {id: 3, name: 'Channel 3', url: ''}
    ])

    App.Data.friday = new App.Collections.LineupItems([
      {time: moment('2015-04-10 15:35 -0700'), artist: {name: 'Haerts'}, where: App.Data.channels.one()},
      {time: moment('2015-04-10 15:35 -0700'), artist: {name: 'Eagulls'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 15:35 -0700'), artist: {name: 'Cloud Nothings'}, where: App.Data.channels.three()},
      {time: moment('2015-04-10 16:10 -0700'), artist: {name: 'Reverend Horton Heat'}, where: App.Data.channels.one()},
      {time: moment('2015-04-10 16:25 -0700'), artist: {name: 'Brant Bjork and the Low Desert Punk Band'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 16:50 -0700'), artist: {name: 'George Ezra'}, where: App.Data.channels.one()},
      {time: moment('2015-04-10 17:20 -0700'), artist: {name: 'Sylvan Esso'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 16:55 -0700'), artist: {name: 'Kieza'}, where: App.Data.channels.three()},
      {time: moment('2015-04-10 17:30 -0700'), artist: {name: 'Charles Bradley and his Extraordinaires'}, where: App.Data.channels.one()},
      {time: moment('2015-04-10 18:10 -0700'), artist: {name: 'Kimbra'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 18:20 -0700'), artist: {name: 'The War on Drugs'}, where: App.Data.channels.one()},
      {time: moment('2015-04-10 19:10 -0700'), artist: {name: 'Raekwon and Ghostface Killah'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 18:45 -0700'), artist: {name: 'Hot Natured'}, where: App.Data.channels.three()},
      {time: moment('2015-04-10 19:10 -0700'), artist: {name: 'Alabama Shakes'}, where: App.Data.channels.one()},
      {time: moment('2015-04-10 20:05 -0700'), artist: {name: 'Gorgon City'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 19:40 -0700'), artist: {name: 'Keys N Krates'}, where: App.Data.channels.three()},
      {time: moment('2015-04-10 20:20 -0700'), artist: {name: 'Interpol'}, where: App.Data.channels.one()},
      {time: moment('2015-04-10 20:50 -0700'), artist: {name: 'Azealia Banks'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 20:30 -0700'), artist: {name: 'DJ Snake'}, where: App.Data.channels.three()},
      {time: moment('2015-04-10 21:15 -0700'), artist: {name: 'Tame Impala'}, where: App.Data.channels.one()},
      {time: moment('2015-04-10 21:35 -0700'), artist: {name: 'Nero'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 21:30 -0700'), artist: {name: 'R3hab (Part 1)'}, where: App.Data.channels.three()},
      {time: moment('2015-04-10 22:30 -0700'), artist: {name: 'Lykke Li'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 22:00 -0700'), artist: {name: 'Porter Robinson'}, where: App.Data.channels.three()},
      {time: moment('2015-04-10 23:20 -0700'), artist: {name: 'Ride'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 23:00 -0700'), artist: {name: 'R3hab (Part 2)'}, where: App.Data.channels.three()},
      {time: moment('2015-04-11 00:05 -0700'), artist: {name: 'Todd Terje and the Olsens'}, where: App.Data.channels.two()},
      {time: moment('2015-04-10 23:35 -0700'), artist: {name: 'Alesso'}, where: App.Data.channels.three()},
    ]);
  }

  window.App = {
    init: function() {
      App.Router = new Router();
      setupViews();
      Backbone.history.start({ pushState: true, root: '/' });
    },
    Data: {
    },
    Models: {},
    Collections: {},
    Dispatcher: _.clone(Backbone.Events)
  }

  var Router = Backbone.Router.extend({});
})();

$(function() { window.App.init(); });

