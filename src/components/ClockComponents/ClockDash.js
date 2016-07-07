import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
// import * as widgetActions from 'redux/modules/widgets';

export default class ClockDash extends Component {
  render() {
    return (
      <div>
        <h2>00:00:00</h2>
        <button>Start</button>
        <button>Pause</button>
      </div>
    );
  }
}
