import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {reduxForm} from 'redux-form';
// import * as widgetActions from 'redux/modules/widgets';
import {ButtonToolbar, Button} from 'react-bootstrap';


export default class CtrlButtons extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="success">Start/Stop</Button>
        <Button>Pause</Button>
      </ButtonToolbar>
    );
  }
}
