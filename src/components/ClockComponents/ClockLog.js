import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {reduxForm} from 'redux-form';
// import * as widgetActions from 'redux/modules/widgets';
import {Table} from 'react-bootstrap';


export default class ClockLog extends Component {
  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
            <th>Job</th>
            <th>Project</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
