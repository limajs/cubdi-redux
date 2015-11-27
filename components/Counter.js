var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <p>
        Clicked: {this.props.counter} times
        {' '}
        <button onClick={this.props.increment}>+</button>
        {' '}
        <button onClick={this.props.decrement}>-</button>
        {' '}
        <button onClick={this.props.incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => this.props.incrementAsync()}>Increment async</button>
      </p> 
    );
  }
});