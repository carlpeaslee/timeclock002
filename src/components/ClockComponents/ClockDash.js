import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {reduxForm} from 'redux-form';
import {TimerDisplay, CtrlButtons, ProjectSelector, TaskSelector} from '../ClockComponents';
// import * as widgetActions from 'redux/modules/widgets';
import {Col, Row} from 'react-bootstrap';


export default class ClockDash extends Component {
  render() {
    return (
      <Row>
        <Col md={3}>
          <TimerDisplay/>
        </Col>
        <Col md={3}>
          <CtrlButtons/>
        </Col>
        <Col md={3}>
          <ProjectSelector />
        </Col>
        <Col md={3}>
          <TaskSelector />
        </Col>
      </Row>
    );
  }
}
