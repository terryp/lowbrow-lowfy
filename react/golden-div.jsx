var React = require('react');

var GoldenDiv = React.createClass({
  render: function() {
    return (
      <div className="goldenDiv">
        <span>
        I have your golden mean right here
        </span>
      </div>
    );
  }
});

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

module.exports.makeDiv = function(id) {
  React.render(
    <GoldenDiv />,
    document.getElementById(id)
  );
}

module.exports.makeTimer = function(id) {
  React.render(
    <Timer />,
    document.getElementById(id)
  );
}
