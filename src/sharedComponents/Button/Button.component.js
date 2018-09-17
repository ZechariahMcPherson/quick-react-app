import React, { Component } froAm 'react';
import PropTypes from 'prop-types';

import _ from 'underscore';

import "./Button.css";

class Button extends Component {

  constructor(props)
  {
    super(props);

    this.state({
      text: this.props.text,
      callback: this.props.callback,
      key: _.isNil(this.props.key) ? Math.random : this.props.key
    });

    this.callSwampi = this.callSwampi.bind(this);

  }

  render() {
    return (
      <div className="button-wrapper">

        <input type="button" value={this.state.text} onClick={this.state.callback)} />

      </div>
    );
  }
}

Button.PropTypes =
{
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  key: PropTypes.number
};


export default Button;
