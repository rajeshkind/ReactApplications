
import React from 'react';
import '../Styles/App.css';
import Livedata from '../Components/Livedata.js';
import { Row, Col } from 'reactstrap';

function Dashboard() {
  return (
    <div className="maincontent">
      <h4>Current Weather </h4>
      <Row >
      <Col sm="4">
      <Livedata/>
      </Col>
      <Col sm="4">
      <Livedata />
      </Col>
      <Col sm="4">
      <Livedata />
      </Col>
    </Row>
    </div>
  )
}

export default Dashboard;