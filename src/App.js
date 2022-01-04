/* eslint-disable */
import { Navbar, Container, Nav, Row, Card, Button } from "react-bootstrap";
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
import dDay from "./pages/D_Day";

function App() {

  let [pushTab, setPushTab] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  return (

    <div className="App">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <h2>HELL ZZANG</h2>
            </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            {/* 디데이 기능 필요 */}
            <Navbar.Text>
              <dDay></dDay>
              <a href="/mypage">D -  </a>  30 
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end2">

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
          <Nav.Link eventKey="link-2" onClick={() => { 스위치변경(false); setPushTab(2); }}>명전</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <TabContent pushTab={pushTab} /> */}


      <BrowserRouter>
        <Routes>
          <Route element={<TabContent pushTab={pushTab} />} path='/' />
          {/* <Route element={<PostListPage />} path='/' /> */}
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
    return <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (

        <Col>
          <React.Fragment>
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
            </Modal>
          </React.Fragment>

          <a onClick={openModal}>
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
  } else if (props.pushTab === 2) {
    return <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (

        <Col>
          <Card border="info" style={{ width: '30rem' }}>

            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#first">
                <Button variant="info">프로필 들어가기</Button>{' '}
              </Nav>
            </Card.Header>

            <Card.Body>
              <Card.Title>100일 다이어트 성공</Card.Title>
              <Card.Text>
                여기는 카드의 내용이 들어갈 부분이라고 생각이 드는곳임
              </Card.Text>
            </Card.Body>

          </Card>

        </Col>
      ))}
    </Row>




  }
}

export default App;
