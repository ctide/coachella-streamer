var ScheduleComponent = React.createBackboneClass({
  getInitialState: function() {
    return {active: 'friday'}
  },
  activate: function(newState) {
    this.setState({active: newState})
  },
  filter: function(lineItem) {
    var time = lineItem.get('time');
    if (this.state.active == 'friday') {
      if (time >= moment('2015-04-10 15:35 -0700', 'YYYY-MM-DD HH:mm Z') && time <= moment('2015-04-10 23:35 -0700', 'YYYY-MM-DD HH:mm Z')) {
        return true;
      }
    } else if (this.state.active == 'saturday') {
      if (time >= moment('2015-04-11 15:35 -0700', 'YYYY-MM-DD HH:mm Z') && time <= moment('2015-04-12 00:25 -0700', 'YYYY-MM-DD HH:mm Z')) {
        return true;
      }
    } else if (this.state.active == 'sunday') {
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
      <div>
        <ul className='nav nav-tabs'>
          <li className={ this.state.active == 'friday' ? 'active' : ''}><a onClick={ this.activate.bind(this, 'friday') }>Friday</a></li>
          <li className={ this.state.active == 'saturday' ? 'active' : ''}><a onClick={ this.activate.bind(this, 'saturday') }>Saturday</a></li>
          <li className={ this.state.active == 'sunday' ? 'active' : ''}><a onClick={ this.activate.bind(this, 'sunday') }>Sunday</a></li>
        </ul>
        <table className='table schedule'>
          <tbody>
            { lineItems }
          </tbody>
        </table>
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
        <td><input type='checkbox' onChange={this.toggleState} checked={this.state.val}></input></td>
        <td className='time'>{ this.getModel().get('time').format('h:mm a') }</td>
        <td className='artist'>{ this.getModel().artist.get('name') }</td>
        <td className='channel'>{ this.getModel().get('channel').get('name') }</td>
      </tr>
    )
  }
})
