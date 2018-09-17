import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import _ from 'underscore';
import { getStarWarsData } from "./../../actions/homeActions";

import "./StarWars.Component.css";


function mapStateToProps(state) {
  return {
    starWarsData: state.starWarsApiData

  };
}

class StarWars extends Component {

  constructor(props)
  {
    super(props);

    this.state = ({
      key:_.isUndefined(this.props.key) ? Math.random : this.props.key
    });

    this.callSwampi = this.callSwampi.bind(this);

    console.log('StarWars constructor');
    this.props.dispatch(getStarWarsData('people/1/'));

  }

  componentWillReceiveProps(nextProps)
  {
    console.log("entered componentWillRecieveProps");
    if(!_.isUndefined(nextProps) || !_.isEmpty(nextProps))
    {
      console.log(nextProps);
    }
  }

  callSwampi()
  {
    console.log("called Swampi");
    this.props.dispatch(getStarWarsData());
  }


  render() {
    return (
      <div className="star-wars-wrapper">


      </div>
    );
  }
}

StarWars.propTypes =
{
  key: PropTypes.number
};



export default connect(
  mapStateToProps
)(StarWars);
