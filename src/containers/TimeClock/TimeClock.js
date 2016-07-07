import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {ClockDash } from 'components'

export default class TimeClock extends Component {


  render() {
    return (
      <div className="container">
        <h1>TimeClock</h1>
        <Helmet title="TimeClock"/>
          <ClockDash />

      </div>
    );
  }
}
