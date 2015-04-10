var ScheduleComponent = React.createBackboneClass({
  getInitialState: function() {
    return {active: 'friday'}
  },
  activate: function(newState) {
    this.setState({active: newState})
  },
  render: function() {
    return (
      <div>
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
    this.getModel().toggleState();
  },
  render: function() {
    return (
      <tr className='line-item'>
        <td className='select'><input type='checkbox' onChange={this.toggleState} checked={this.state.val}></input></td>
        <td className='time'>{ this.getModel().get('time').format('h:mm a') }</td>
        <td className='artist'>{ this.getModel().artist.get('name') }</td>
        <td className='channel'>{ this.getModel().get('channel').get('name') }</td>
      </tr>
    )
  }
})
