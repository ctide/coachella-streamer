var ScheduleComponent = React.createBackboneClass({
  render: function() {
    var lineItems = this.getCollection().map(function(lineItem) {
      return <LineupItemComponent model={ lineItem }/>
    });
    return (
      <table className='schedule'>
        { lineItems }
      </table>
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
        <td className='checkbox'><input type='checkbox' onChange={this.toggleState} checked={this.state.val}></input></td>
        <td className='time'>{ this.getModel().get('time').format('h:mm a') }</td>
        <td className='artist'>{ this.getModel().artist.get('name') }</td>
      </tr>
    )
  }
})
