/* eslint-disable */
import { Navbar, Container, Nav, Row, Card, Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import './App.css';
import React, { useState } from "react";
import image from "./images.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyPage from "./pages/MyPage";
//import { Route } from "react-router";


function App() {

  let [pushTab, setPushTab] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  return (

    <div className="App">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">미션 임파서블!!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              사 용 자 : <a href="/mypage">침착맨</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); setPushTab(0); }}>Main</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); setPushTab(1); }}>Rank</Nav.Link>
        </Nav.Item>
      </Nav>




      <BrowserRouter>
        <Routes>
          <Route element={<TabContent pushTab={pushTab} />} path='/' />
          <Route element={<MyPage />} path='/mypage' />
        </Routes>
      </BrowserRouter>
    </div>

  );
}


function TabContent(props) {
  if (props.pushTab === 0) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>큰 미션</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">user_id</Button>
        </Card.Body>
      </Card>
    )
    
  } else if (props.pushTab === 1) {
    return <h1>명예의 전당 들어갈곳</h1>

  }

}



export default App;
