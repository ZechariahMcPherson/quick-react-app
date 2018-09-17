import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'underscore';


class Starwars extends Component {

  constructor(props)
  {
    super(props);

    this.state({
      key: _.isNil(this.props.key) ? Math.random : this.props.key
    });

    this.callSwampi = this.callSwampi.bind(this);

  }

  render() {
    return (
      <div className="starwars-wrapper">
        hi
      </div>
    );
  }
}

Starwars.PropTypes =
{
  key: PropTypes.number
};


export default Starwars;
