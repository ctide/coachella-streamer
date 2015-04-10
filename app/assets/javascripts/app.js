(function() {
  var setupPlayer = function() {
    console.log('setting up');
    console.log(App.Data.videoId);
    window.onYouTubeIframeAPIReady = function() {
      App.Data.player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: App.Data.videoId,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    function onPlayerReady(event) {
      event.target.playVideo();
      App.Data.playerReady = true;
    }

    function onPlayerStateChange(event) {
    }
  }
  var setupViews = function() {
    var ScheduleView = React.createFactory(ScheduleComponent);
    var scheduleView = ScheduleView({collection: App.Data.lineupItems});
    React.render(scheduleView, $('.contents')[0]);
  }

  var setupSchedule = function() {
    App.Data.channels = new App.Collections.Channels([
      {id: 1, name: 'Channel 1', videoId: '0-g994f5tS8'},
      {id: 2, name: 'Channel 2', videoId: 'D7ImOXSKFpE'},
      {id: 3, name: 'Channel 3', videoId: 'HC5sCm6Mg40'}
    ])

    App.Data.lineupItems = new App.Collections.LineupItems([
      {id: 1, time: moment('2015-04-10 15:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Haerts'}, channel: App.Data.channels.one()},
      {id: 2, time: moment('2015-04-10 15:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Eagulls'}, channel: App.Data.channels.two()},
      {id: 3, time: moment('2015-04-10 15:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Cloud Nothings'}, channel: App.Data.channels.three()},
      {id: 4, time: moment('2015-04-10 16:10 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Reverend Horton Heat'}, channel: App.Data.channels.one()},
      {id: 5, time: moment('2015-04-10 16:25 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Brant Bjork and the Low Desert Punk Band'}, channel: App.Data.channels.two()},
      {id: 6, time: moment('2015-04-10 16:50 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'George Ezra'}, channel: App.Data.channels.one()},
      {id: 7, time: moment('2015-04-10 17:20 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Sylvan Esso'}, channel: App.Data.channels.two()},
      {id: 8, time: moment('2015-04-10 16:55 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Kieza'}, channel: App.Data.channels.three()},
      {id: 9, time: moment('2015-04-10 17:30 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Charles Bradley and his Extraordinaires'}, channel: App.Data.channels.one()},
      {id: 10, time: moment('2015-04-10 18:10 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Kimbra'}, channel: App.Data.channels.two()},
      {id: 11, time: moment('2015-04-10 18:20 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'The War on Drugs'}, channel: App.Data.channels.one()},
      {id: 12, time: moment('2015-04-10 19:10 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Raekwon and Ghostface Killah'}, channel: App.Data.channels.two()},
      {id: 13, time: moment('2015-04-10 18:45 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Hot Natured'}, channel: App.Data.channels.three()},
      {id: 14, time: moment('2015-04-10 19:10 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Alabama Shakes'}, channel: App.Data.channels.one()},
      {id: 15, time: moment('2015-04-10 20:05 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Gorgon City'}, channel: App.Data.channels.two()},
      {id: 16, time: moment('2015-04-10 19:40 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Keys N Krates'}, channel: App.Data.channels.three()},
      {id: 17, time: moment('2015-04-10 20:20 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Interpol'}, channel: App.Data.channels.one()},
      {id: 18, time: moment('2015-04-10 20:50 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Azealia Banks'}, channel: App.Data.channels.two()},
      {id: 19, time: moment('2015-04-10 20:30 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'DJ Snake'}, channel: App.Data.channels.three()},
      {id: 20, time: moment('2015-04-10 21:15 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Tame Impala'}, channel: App.Data.channels.one()},
      {id: 21, time: moment('2015-04-10 21:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Nero'}, channel: App.Data.channels.two()},
      {id: 22, time: moment('2015-04-10 21:30 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'R3hab (Part 1)'}, channel: App.Data.channels.three()},
      {id: 23, time: moment('2015-04-10 22:30 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Lykke Li'}, channel: App.Data.channels.two()},
      {id: 24, time: moment('2015-04-10 22:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Porter Robinson'}, channel: App.Data.channels.three()},
      {id: 25, time: moment('2015-04-10 23:20 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Ride'}, channel: App.Data.channels.two()},
      {id: 26, time: moment('2015-04-10 23:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'R3hab (Part 2)'}, channel: App.Data.channels.three()},
      {id: 27, time: moment('2015-04-11 00:05 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Todd Terje and the Olsens'}, channel: App.Data.channels.two()},
      {id: 28, time: moment('2015-04-10 23:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Alesso'}, channel: App.Data.channels.three()},
    ], {parse: true});

    var params = getSearchParameters();
    if (params && params.ids) {
      var ids = params.ids.split(',');
      App.Data.liveChannels = new App.Collections.LineupItems(App.Data.lineupItems.filter(function(lineitem) { return _.contains(ids, '' + lineitem.get('id')) }), {parse: true});
      App.updatePlayer();
    } else {
      if (localStorage['liveChannels']) {
        App.Data.liveChannels = new App.Collections.LineupItems(JSON.parse(localStorage['liveChannels']), {parse: true});
      } else {
        App.Data.liveChannels = new App.Collections.LineupItems();
      }
    }
  }

  window.App = {
    init: function() {
      App.Router = new Router();
      setupSchedule();
      setupViews();
      setupPlayer();
      Backbone.history.start({ pushState: true, root: '/' });
      App.Dispatcher.on('enableChannel', function(lineupItem) {
        App.Data.liveChannels.add(lineupItem);
      });
      App.Dispatcher.on('disableChannel', function(lineupItem) {
        App.Data.liveChannels.remove(lineupItem);
      });
      App.Data.liveChannels.on('add remove', function() {
        localStorage['liveChannels'] = JSON.stringify(App.Data.liveChannels.toJSON());
        if (App.Data.nextTimeout) {
          clearTimeout(App.Data.nextTimeout);
        }
        var urlParam = '?ids=' + App.Data.liveChannels.map(function(li) { return li.get('id'); }).join(',')
        window.history.pushState(null, "Coachella Streamer", urlParam);
        App.updatePlayer();
      });
    },
    Data: {videoId: '0-g994f5tS8', playerReady: false},
    Models: {},
    Collections: {},
    updatePlayer: function() {
      var active = App.Data.liveChannels.filter(function(lineupItem) {
        return lineupItem.get('time') <= moment();
      }).pop();

      if (active) {
        var videoId = active.get('channel').get('videoId');
        if (App.Data.videoId != videoId) {
          App.Data.videoId = videoId;
          if (App.Data.playerReady) {
            App.Data.player.loadVideoById(videoId);
          }
        }
      }

      var nextUp = App.Data.liveChannels.filter(function(lineupItem) {
        return lineupItem.get('time') > moment();
      }).shift();

      if (nextUp) {
        var timeDiff = nextUp.get('time') - new moment();
        App.Data.nextTimeout = setTimeout(App.updatePlayer, timeDiff);
      }
    },
    Dispatcher: _.clone(Backbone.Events)
  }

  var Router = Backbone.Router.extend({});
})();

function getSearchParameters() {
 var prmstr = window.location.search.substr(1);
 return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
 var params = {};
 var prmarr = prmstr.split("&");
 for ( var i = 0; i < prmarr.length; i++) {
   var tmparr = prmarr[i].split("=");
   params[tmparr[0]] = tmparr[1];
 }
 return params;
}

$(function() { window.App.init(); });

