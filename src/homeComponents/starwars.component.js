import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'underscore';
import { getStarwarsData } from "../actions/homeActions";

class Starwars extends Component {

  constructor(props)
  {
    super(props);

    this.state({
      key: _.isNil(this.props.key) ? Math.random : this.props.key
    });

    this.callSwampi = this.callSwampi.bind(this);

  }

  componentWillRecieveProps(nextProps)
  {
    if(_.isNil(nextProps))
    {
      console.log(nextProps);
    }
  }

  callSwampi()
  {
    this.props.dispatch(getStarwarsData);
  }


  render() {
    return (
      <div className="starwars-wrapper">
        hi
      </div>
    );
  }
}

Starwars.propTypes =
{
  key: PropTypes.number
};


export default Starwars;
