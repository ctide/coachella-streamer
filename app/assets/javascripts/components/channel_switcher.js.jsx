var ChannelSwitcherComponent = React.createClass({
  componentWillMount: function() {
    var self = this;
    App.Dispatcher.on('change:music', function() {
      self.forceUpdate();
    });
  },
  changeChannel: function(newChan) {
    App.Dispatcher.trigger('changeChannel', App.Data.channels.findWhere({id: newChan}));
  },
  render: function() {
    return (
      <div className='btn-group'>
        <button className='btn btn-default' disabled={App.Data.currentChannel.get('id') == 1} onClick={ this.changeChannel.bind(this, 1) }>Channel 1</button>
        <button className='btn btn-default' disabled={App.Data.currentChannel.get('id') == 2} onClick={ this.changeChannel.bind(this, 2) }>Channel 2</button>
        <button className='btn btn-default' disabled={App.Data.currentChannel.get('id') == 3} onClick={ this.changeChannel.bind(this, 3) }>Channel 3</button>
      </div>
    )
  }
});
