/* eslint-disable */
import { Navbar, Container, Nav, Row, Card, Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import './App.css';
import React, { useState, useEffect, useReducer } from "react";
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

  const [isLogin, setIsLogin] = useState(false)


  let [pushTab, setPushTab] = useState(0);
  let [스위치, 스위치변경] = useState(false);
  let [sessionid, setsessionid] = useState([]);

  
  return (

    <div className="App">
      <Navbar expand="lg">

        <Container>
          <Navbar.Brand href="/">
            <h2>HELL ZZANG</h2>
            </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text> 
              {/* 가져오기버튼누르면 디데이 활성화 */}
              <form onSubmit={(e)=>{
                e.preventDefault();
                axios({
                  url:'http://localhost:8080/mission',
                  method : 'get',
                  params : {userid:window.sessionStorage.getItem("userid")}
                }).then((res)=>{setsessionid(res.data);})
                let last = new Date(sessionid['0'].last_day)
                let now = new Date(); 
                const diday = Math.ceil((last - now)/1000/60/60/24);
                window.sessionStorage.setItem("diday", diday);

                console.log(window.sessionStorage.getItem("userid"));
                console.log(last);
                console.log(now);
                console.log(diday);
                console.log(window.sessionStorage.getItem("diday"));
                }}> 
                <button type="submit">Day가져오기</button>
              </form>
              <h2>D{window.sessionStorage.getItem("diday")}</h2>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end2">

            <Navbar.Text>
             
              <a href="/mypage">사용자</a> : <a href="/login" onClick={() => { <LoginPage /> }}>
                로그인하세요!{window.sessionStorage.getItem('nickname')}
              </a>

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

function findContentById() {
  // 선택된 요소(html, css, js)의 id에 해당하는 객체 찾기
  let content;
  for (let i = 0; i < this.state.contents.length; i++) {
    if (this.state.id == this.state.contents[i].id) {
      content = this.state.contents[i];
      break;
    }
  }
  return content;
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
    console.log()
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
