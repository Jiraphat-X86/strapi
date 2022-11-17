import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <Container className="p-3">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">NETPIE</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Sumika Fujimiya</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <BrowserRouter>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Overview</Nav.Link>
              <Nav.Link href="/device_list">Device List</Nav.Link>
              <Nav.Link href="/device_groups">Device Groups</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Routes>
          <Route exact path="/" element={<Overview />}/>
          <Route path="/device_list" element={<DeviceList />}/>
          <Route path="/device_list/device" element={<Device />}/>
          <Route path="/device_groups" element={<DeviceGroups />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

function Overview() {
  const [items, setItems] = useState({
    attributes: {
      detail:'',
      device:'',
      group:''
    }
  });

  useEffect(() => {
    fetch('http://localhost:1337/api/overview', {method: 'GET'})
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data)
      setItems(data.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Card>
            <Card.Header>Detail</Card.Header>
            <Card.Body>
              <Card.Text>{items.attributes.detail}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card  style={{ width: '15rem' }}>
            <Card.Header>Device</Card.Header>
            <Card.Body>
              <Card.Text>{items.attributes.device}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card  style={{ width: '15rem' }}>
            <Card.Header>Group</Card.Header>
            <Card.Body>
              <Card.Text>{items.attributes.group}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>     
    </Container>
  );
}

function DeviceList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/devices', {method: 'GET'})
    .then((response) => response.json())
    .then((data) => {
      setItems(data.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Hastag</th>
            <th>Tag</th>
            <th>Group</th>
            <th>Create Date</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) =>
            <tr key={index}>
              <td>{item.attributes.name}</td>
              <td/>
              <td/>
              <td>{item.attributes.name}</td>
              <td>{item.attributes.createdAt}</td>
              <td><Link to='/device_list/device'>รายละเอียด</Link></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

function Device() {
  
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Card>
            <Card.Header>Detail</Card.Header>
            <Card.Body>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card  style={{ width: '15rem' }}>
            <Card.Header>Device</Card.Header>
            <Card.Body>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card  style={{ width: '15rem' }}>
            <Card.Header>Group</Card.Header>
            <Card.Body>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>     
    </Container>
  );
}

function DeviceGroups() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/device-groups', {method: 'GET'})
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setItems(data.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Hastag</th>
            <th>Tag</th>
            <th>Devices</th>
            <th>Create Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) =>
              <tr key={index}>
              <td>{item.attributes.name}</td>
              <td/>
              <td/>
              <td>{item.attributes.name}</td>
              <td>{item.attributes.createdAt}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default App;


