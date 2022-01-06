/* eslint-disable */
import { Navbar, Container, Nav, Row, Card, Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import './App.css';
import React, { useState, useEffect, useReducer } from "react";
// import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import MyPage from './pages/MyPage';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import FooterPage from "./FooterPage";

import PrivateRouter from "./modules/PrivateRouter";
import image from "./images.jpg";
import axios from 'axios';

import NavBarPage from './pages/NavBarPage';



function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [nickname] = useState(0)
  const backTotheLogin = () => <Navigate to="/login" />;

  let [pushTab, setPushTab] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  //window.sessionStorage.removeItem('userid');
  //window.sessionStorage.removeItem('nickname');
  
  useEffect(() => {
    if (sessionStorage.getItem('userid') === null) {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log('isLogin ?? :: ', isLogin)
      console.log(window.sessionStorage.getItem("userid"));
    }
    else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
      axios({
        method: "get",
        url: "http://localhost:8080/user/output",
        params: { userid: window.sessionStorage.getItem("userid") },
      }).then(function (response) {
        // response Action
        window.sessionStorage.setItem("nickname", response.data['0'].nickname);
        console.log(window.sessionStorage.getItem("userid"));
      });
    }
  })
  return (
    <div className="App">

      <NavBarPage />

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); setPushTab(0); }}><h4>MAIN</h4></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => { 스위치변경(false); setPushTab(2); }}><h4>BEST</h4></Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <TabContent pushTab={pushTab} /> */}

    
      <BrowserRouter>
        <Routes>
          <Route element={< TabContent pushTab={pushTab} />} path='/' />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<WritePage />} path="/write" />
          <Route element={<PostPage />} path="/:username/:postId" />
          <Route element={<PrivateRouter><MyPage /></PrivateRouter>} path="/mypage"/>
        </Routes>
      </BrowserRouter>
     <FooterPage/>
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
      {Array.from({ length: 8 }).map((_, idx) => (
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

  } else if (props.pushTab === 1) {
    return <h1>명예의 전당 들어갈곳</h1>
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
