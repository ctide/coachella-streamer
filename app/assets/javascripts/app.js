/* eslint-disable */
(function() {
  var woopraInterval;
  var startWoopraPoll = function() {
      woopraInterval = setInterval(function() {
          if (woopra && woopra.moved) {
              woopra.moved(null, +new Date());
          }
      }, 10000);
  };
  var stopWoopraPoll = function() {
      if (woopraInterval) {
          clearInterval(woopraInterval);
      }
  };

  var setupPlayer = function() {
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
      App.handlePlayerStateChange(event);
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

    App.Data.currentChannel = App.Data.channels.first();

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

      {id: 29, time: moment('2015-04-11 15:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Royal Blood'}, channel: App.Data.channels.two()},
      {id: 30, time: moment('2015-04-11 15:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Parquet Courts'}, channel: App.Data.channels.three()},
      {id: 31, time: moment('2015-04-11 15:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Clean Bandit'}, channel: App.Data.channels.one()},
      {id: 32, time: moment('2015-04-11 16:15 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Benjamin Booker'}, channel: App.Data.channels.two()},
      {id: 33, time: moment('2015-04-11 16:15 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Lights'}, channel: App.Data.channels.three()},
      {id: 34, time: moment('2015-04-11 16:40 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Milky Chance'}, channel: App.Data.channels.one()},
      {id: 35, time: moment('2015-04-11 16:55 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Toro Y Moi'}, channel: App.Data.channels.two()},
      {id: 36, time: moment('2015-04-11 17:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Perfume Genius'}, channel: App.Data.channels.three()},
      {id: 37, time: moment('2015-04-11 17:30 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'St. Paul & The Broken Bones'}, channel: App.Data.channels.one()},
      {id: 38, time: moment('2015-04-11 17:40 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Chet Faker'}, channel: App.Data.channels.three()},
      {id: 39, time: moment('2015-04-11 18:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Yelle'}, channel: App.Data.channels.two()},
      {id: 40, time: moment('2015-04-11 18:15 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Hozier'}, channel: App.Data.channels.one()},
      {id: 41, time: moment('2015-04-11 18:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Andrew McMahon in the wilderness'}, channel: App.Data.channels.three()},
      {id: 42, time: moment('2015-04-11 18:45 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Bad Religion'}, channel: App.Data.channels.two()},
      {id: 43, time: moment('2015-04-11 19:05 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Run The Jewels'}, channel: App.Data.channels.one()},
      {id: 44, time: moment('2015-04-11 19:25 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Belle & Sebastian'}, channel: App.Data.channels.three()},
      {id: 45, time: moment('2015-04-11 19:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Glass Animals (Partial Set)'}, channel: App.Data.channels.two()},
      {id: 46, time: moment('2015-04-11 20:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Father John Misty'}, channel: App.Data.channels.two()},
      {id: 47, time: moment('2015-04-11 20:15 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Alt-j'}, channel: App.Data.channels.one()},
      {id: 48, time: moment('2015-04-11 20:20 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Duke Dumont'}, channel: App.Data.channels.three()},
      {id: 49, time: moment('2015-04-11 20:50 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Jungle'}, channel: App.Data.channels.two()},
      {id: 50, time: moment('2015-04-11 21:15 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Jack White'}, channel: App.Data.channels.one()},
      {id: 51, time: moment('2015-04-11 21:25 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Gramatik'}, channel: App.Data.channels.three()},
      {id: 52, time: moment('2015-04-11 21:30 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Tyler, the Creator'}, channel: App.Data.channels.two()},
      {id: 53, time: moment('2015-04-11 22:20 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'FKA Twigs'}, channel: App.Data.channels.two()},
      {id: 54, time: moment('2015-04-11 22:20 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Dirty South'}, channel: App.Data.channels.three()},
      {id: 55, time: moment('2015-04-11 23:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Flosstradamus'}, channel: App.Data.channels.one()},
      {id: 56, time: moment('2015-04-11 23:15 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Deorro'}, channel: App.Data.channels.three()},
      {id: 57, time: moment('2015-04-11 23:25 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'The Weekend'}, channel: App.Data.channels.two()},
      {id: 58, time: moment('2015-04-11 23:55 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Axwell & Ingrosso'}, channel: App.Data.channels.one()},
      {id: 59, time: moment('2015-04-12 00:15 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Ratatat'}, channel: App.Data.channels.three()},
      {id: 60, time: moment('2015-04-12 00:25 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Antemasque (partial set)'}, channel: App.Data.channels.two()},

      {id: 61, time: moment('2015-04-12 16:30 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Mac Demarco'}, channel: App.Data.channels.one()},
      {id: 62, time: moment('2015-04-12 16:20 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Sturgill Simpson'}, channel: App.Data.channels.two()},
      {id: 63, time: moment('2015-04-12 16:10 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Rac'}, channel: App.Data.channels.three()},
      {id: 64, time: moment('2015-04-12 17:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Jenny Lewis'}, channel: App.Data.channels.one()},
      {id: 65, time: moment('2015-04-12 17:10 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'St. Lucia'}, channel: App.Data.channels.two()},
      {id: 66, time: moment('2015-04-12 17:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Panda Bear'}, channel: App.Data.channels.three()},
      {id: 67, time: moment('2015-04-12 18:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Ryan Adams'}, channel: App.Data.channels.one()},
      {id: 68, time: moment('2015-04-12 18:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Tycho'}, channel: App.Data.channels.two()},
      {id: 69, time: moment('2015-04-12 17:45 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'What so not'}, channel: App.Data.channels.three()},
      {id: 70, time: moment('2015-04-12 19:25 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Marina & the Diamonds (partial set)'}, channel: App.Data.channels.one()},
      {id: 71, time: moment('2015-04-12 18:50 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Vance Joy'}, channel: App.Data.channels.two()},
      {id: 72, time: moment('2015-04-12 18:45 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Martin Solveig'}, channel: App.Data.channels.three()},
      {id: 73, time: moment('2015-04-12 19:55 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Kaskade'}, channel: App.Data.channels.one()},
      {id: 74, time: moment('2015-04-12 19:40 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'The Cribs'}, channel: App.Data.channels.two()},
      {id: 75, time: moment('2015-04-12 19:45 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Madeon'}, channel: App.Data.channels.three()},
      {id: 76, time: moment('2015-04-12 20:45 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Florence & The Machine'}, channel: App.Data.channels.one()},
      {id: 77, time: moment('2015-04-12 20:55 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Stromae'}, channel: App.Data.channels.two()},
      {id: 78, time: moment('2015-04-12 20:45 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'New world punk'}, channel: App.Data.channels.three()},
      {id: 79, time: moment('2015-04-12 21:15 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'St. Vincent'}, channel: App.Data.channels.two()},
      {id: 80, time: moment('2015-04-12 21:45 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'David Guetta'}, channel: App.Data.channels.three()},
      {id: 81, time: moment('2015-04-12 22:10 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Fitz & The Tantrums'}, channel: App.Data.channels.two()},
      {id: 82, time: moment('2015-04-12 23:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Kygo (partial set)'}, channel: App.Data.channels.three()},
      {id: 83, time: moment('2015-04-12 23:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Odesza'}, channel: App.Data.channels.two()},
      {id: 84, time: moment('2015-04-12 23:30 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Jamie xx (partial set)'}, channel: App.Data.channels.three()},
      {id: 85, time: moment('2015-04-12 15:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Circa Survive'}, channel: App.Data.channels.one()},
      {id: 86, time: moment('2015-04-12 15:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'M0'}, channel: App.Data.channels.two()},
      {id: 87, time: moment('2015-04-12 15:35 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'The Orwells'}, channel: App.Data.channels.three()},

      {id: 88, time: moment('2015-04-10 17:50 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Action Bronson'}, channel: App.Data.channels.three()},
      {id: 89, time: moment('2015-04-11 00:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Azealia Banks (encore)'}, channel: App.Data.channels.one()},
      {id: 90, time: moment('2015-04-10 23:00 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'Alabama Shakes (encore)'}, channel: App.Data.channels.one()},
      {id: 91, time: moment('2015-04-10 22:05 -0700', 'YYYY-MM-DD HH:mm Z'), artist: {name: 'The War on Drugs (encore)'}, channel: App.Data.channels.one()},

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
      App.Data.desktopNotifications = !!localStorage['desktopNotifications']
      App.Router = new Router();
      setupSchedule();
      setupViews();
      setupPlayer();
      Backbone.history.start({ pushState: true, root: '/' });
      App.Dispatcher.on('enableChannel', function(lineupItem) {
        App.Data.liveChannels.add(lineupItem);
      });
      App.Dispatcher.on('disableChannel', function(lineupItem) {
        App.Data.liveChannels.remove(App.Data.liveChannels.findWhere({id: lineupItem.get('id')}));
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
    handlePlayerStateChange: function(event) {
        var actionMap = [
            'ended',
            'playing',
            'paused',
            'buffering',
            'video cued'
        ];

        if (event.data === YT.PlayerState.PLAYING) {
          startWoopraPoll();
          woopra.track('Playing Video', event.target.getVideoData());
        }
        else if (event.data === YT.PlayerState.ENDED) {
          woopra.track('Stopped Playing Video', event.target.getVideoData());
          stopWoopraPoll();
        }
        else if (event.data === YT.PlayerState.PAUSED) {
          woopra.track('Paused Playing Video', event.target.getVideoData());
          stopWoopraPoll();
        }
    },
    updatePlayer: function() {
      var active = App.Data.liveChannels.filter(function(lineupItem) {
        return lineupItem.get('time') <= moment();
      }).pop();

      if (active) {
        var videoId = active.get('channel').get('videoId');
        App.Data.currentChannel = active.get('channel');
        if (App.Data.videoId != videoId) {
          App.Dispatcher.trigger('change:music');
          App.Data.videoId = videoId;
          if (App.Data.playerReady) {
            App.Data.player.loadVideoById(videoId);
            if (App.Data.desktopNotifications) {
              var notification = new Notification('Coachella Stream', {
                body: 'Switching to ' + active.get('channel').get('name') + ' for ' + active.artist.get('name')
              });
            }
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

