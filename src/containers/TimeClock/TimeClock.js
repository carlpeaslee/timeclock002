import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {ClockDash, ClockLog} from 'components';
import {Tabs, Tab} from 'react-bootstrap';


export default class TimeClock extends Component {
  render() {
    return (
      <div className="container">
        <Helmet title="TimeClock"/>
        <h1>TimeClock</h1>
        <Tabs activeKey={1}>
          <Tab eventKey={1} title="Tab 1">
            <ClockDash />
          </Tab>
          <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
          <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
        </Tabs>
        <ClockLog />
      </div>
    );
  }
}
