import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {reduxForm} from 'redux-form';
// import * as widgetActions from 'redux/modules/widgets';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';


export default class TaskSelector extends Component {
  render() {
    return (
      <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Multiple select</ControlLabel>
            <FormControl componentClass="select" multiple>
              <option value="select">select (multiple)</option>
              <option value="other">...</option>
            </FormControl>
      </FormGroup>
    );
  }
}
