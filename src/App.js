/* eslint-disable */
import { Navbar, Container, Nav, Row, Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import './App.css';
import React, { useState } from "react";
// import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import MyPage from './pages/MyPage';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Modal from "./components/Modal/Modal";


import image from "./images.jpg";
import axios from 'axios';

function App() {

  let [pushTab, setPushTab] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  return (

    <div className="App">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">로 고</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <a href="/mypage">사용자</a> : <a href="/login" onClick={() => { <LoginPage /> }}>침착맨</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); setPushTab(0); }}>메인</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); setPushTab(1); }}>명전</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => { 스위치변경(false); setPushTab(2); }}>미정</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <TabContent pushTab={pushTab} /> */}

    
      <BrowserRouter>
        <Routes>
          <Route element={<TabContent pushTab={pushTab} />} path='/' />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<WritePage />} path="/write" />
          <Route element={<PostPage />} path="/:username/:postId" />
          <Route element={<MyPage />} path="/mypage" />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

function TabContent(props) {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  if (props.pushTab === 0) {
    return <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <React.Fragment>
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
            </Modal>
          </React.Fragment>
          <a onClick= {openModal}>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>카드 제목</Card.Title>
              <Card.Text>
                여기는 카드의 내용이 들어갈 부분이라고 생각이 드는곳임
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
      ))}
    </Row>
  } else if (props.pushTab === 1) {
    return <h1>명예의 전당 들어갈곳</h1>
  } else if (props.pushTab === 2) {
    return <h1>여기에 들어갈건 아직 미정</h1>
  }
}

export default App;
