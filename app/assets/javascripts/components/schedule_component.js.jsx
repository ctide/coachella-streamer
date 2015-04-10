var ScheduleComponent = React.createBackboneClass({
  var lineItems = this.getCollection().map(function(lineItem) {
    return <LineupItemComponent model={ lineItem }/>
  });
  render: function() {
    return (
      <table className='schedule'>
        { lineItems }
      </table>
    )
  }
});

var LineupItemComponent = React.createBackboneClass({
  getInitialState: function() {
    { val: false }
  },
  toggleState: function() {
    this.setState({val: !this.state.val});
  },
  render: function() {
    return (
      <tr className='line-item'>
        <td className='checkbox'><input type='checkbox' onChange={this.toggleState} value={this.state.val}></input></td>
        <td className='time'>{ this.getModel().get('time').format('h:mm a') }</td>
        <td className='artist'>{ this.getModel().get('name') }</td>
      </tr>
    )
  }
})
