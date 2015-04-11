var ScheduleComponent = React.createBackboneClass({
  getInitialState: function() {
    var active = 'sunday';
    if (moment() <= moment('2015-04-10 23:35 -0700', 'YYYY-MM-DD HH:mm Z')) {
      active = 'friday';
    } else if (moment() <= moment('2015-04-12 00:25 -0700', 'YYYY-MM-DD HH:mm Z')) {
      active = 'saturday';
    }
    return {active: active, desktopNotifications: App.Data.desktopNotifications}
  },
  activate: function(newState) {
    this.setState({active: newState})
  },
  enableNotifications: function() {
    this.setState({desktopNotifications: true});
    App.Data.desktopNotifications = true;
    localStorage['desktopNotifications'] = true;
  },
  toggleNotifications: function(e) {
    var self = this;
    if (this.state.desktopNotifications) {
      this.setState({desktopNotifications: false});
      App.Data.desktopNotifications = false;
      localStorage['desktopNotifications'] = false;
    } else {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission(function() {
          self.enableNotifications();
        });
      } else {
        self.enableNotifications();
      }
    }
  },
  render: function() {
    return (
      <div>
        <div className='checkbox enable-desktop-notifications'>
          <label>
            <input type='checkbox' checked={ this.state.desktopNotifications } onChange={ this.toggleNotifications } id='notifications'/>
            Enable desktop notifications when the channel is changed
          </label>
        </div>
        <ul className='nav nav-tabs'>
          <li className={ this.state.active == 'friday' ? 'active' : ''}><a onClick={ this.activate.bind(this, 'friday') }>Friday</a></li>
          <li className={ this.state.active == 'saturday' ? 'active' : ''}><a onClick={ this.activate.bind(this, 'saturday') }>Saturday</a></li>
          <li className={ this.state.active == 'sunday' ? 'active' : ''}><a onClick={ this.activate.bind(this, 'sunday') }>Sunday</a></li>
          <li className={ this.state.active == 'wut' ? 'active' : ''}><a onClick={ this.activate.bind(this, 'wut') }>What is this?</a></li>
        </ul>
        { this.state.active == 'wut' ? <ExplanationComponent/> : <LineupItemTableComponent collection={ this.getCollection() } active={ this.state.active }/> }
      </div>
    )
  }
});

var LineupItemTableComponent = React.createBackboneClass({
  componentWillMount: function() {
    var self = this;
    App.Dispatcher.on('change:music', function() {
      self.forceUpdate();
    });
  },
  filter: function(lineItem) {
    var time = lineItem.get('time');
    if (this.props.active == 'friday') {
      if (time >= moment('2015-04-10 15:35 -0700', 'YYYY-MM-DD HH:mm Z') && time <= moment('2015-04-10 23:35 -0700', 'YYYY-MM-DD HH:mm Z')) {
        return true;
      }
    } else if (this.props.active == 'saturday') {
      if (time >= moment('2015-04-11 15:35 -0700', 'YYYY-MM-DD HH:mm Z') && time <= moment('2015-04-12 00:25 -0700', 'YYYY-MM-DD HH:mm Z')) {
        return true;
      }
    } else if (this.props.active == 'sunday') {
      if (time >= moment('2015-04-12 15:35 -0700', 'YYYY-MM-DD HH:mm Z') && time <= moment('2015-04-12 23:30 -0700', 'YYYY-MM-DD HH:mm Z')) {
        return true;
      }
    }
    return false;
  },
  render: function() {
    if (this.timeout) { clearTimeout(this.timeout); }
    this.timeout = window.setTimeout(this.forceUpdate, App.Data.lineupItems.nextUpItem().get('time') - moment());
    var lineItems = this.getCollection().filter(this.filter).map(function(lineItem) {
      return <LineupItemComponent model={ lineItem } key={ lineItem.get('id') }/>
    });
    return (
      <table className='table schedule'>
        <tbody>
          { lineItems }
        </tbody>
      </table>
    )
  }
});

var ExplanationComponent = React.createClass({
  render: function() {
    return (
      <div>
        <p>There's lots of acts at Coachella I want to listen to this year that are all playing on different channels.  Since I'm way too lazy to remember to switch between them, I hacked this together
        so that I could just select all the acts I care about, and it will switch between them for me so I can just leave it on in the background.  Right now it's only setup for weekend 1, but I'll
        update it before next weekend so that you can use the same URL to listen then also.</p>
        <p>Comments? You can reach me on twitter: <a href='https://www.twitter.com/ctide'>@ctide</a> or via email at: chris at fifteenb.com</p>
      </div>
    )
  }
});

var LineupItemComponent = React.createBackboneClass({
  getInitialState: function() {
    return { val: !!App.Data.liveChannels.findWhere({id: this.getModel().get('id')}) }
  },
  toggleState: function() {
    this.setState({val: !this.state.val});
    this.getModel().setState(!this.state.val);
  },
  render: function() {
    var playing = this.getModel() == App.Data.lineupItems.activeItem();
    return (
      <tr className='line-item'>
        <td className='select'><input type='checkbox' onChange={this.toggleState} checked={this.state.val}></input></td>
        <td className='time'>
          { this.getModel().get('time').format('h:mm a') }
        </td>
        <td className='artist'>
          { this.getModel().artist.get('name') }
          { playing ? <i className="fa fa-music"></i> : '' }
        </td>
        <td className='channel'>{ this.getModel().get('channel').get('name') }</td>
      </tr>
    )
  }
})
