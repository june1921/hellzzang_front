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
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import FooterPage from "./FooterPage";

import PrivateRouter from "./modules/PrivateRouter";
import image from "./images.jpg";
import axios from 'axios';
import { HeatMapOutlined } from "@ant-design/icons";

function App() {

  const [isLogin, setIsLogin] = useState(false)

  const backTotheLogin = () => <Navigate to="/login" />;

  let [pushTab, setPushTab] = useState(0);
  let [스위치, 스위치변경] = useState(false);
  let [sessionid, setsessionid] = useState([]);

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
  }, []);

  return (
    <div className="App">
      <Navbar expand="lg">

        <Container>
          <Navbar.Brand href="/">
            <h1 className="h1">HELL ZZANG</h1>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* 가져오기버튼누르면 디데이 활성화 */}
              <form onSubmit={(e) => {
                e.preventDefault();
                axios({
                  url: 'http://localhost:8080/mission',
                  method: 'get',
                  params: { userid: window.sessionStorage.getItem("userid") }
                }).then((res) => { setsessionid(res.data); })
                let last = new Date(sessionid['0'].last_day)
                let now = new Date();
                const diday = Math.ceil((last - now) / 1000 / 60 / 60 / 24);
                window.sessionStorage.setItem("diday", diday);
              }}>


                <button type="submit">Day가져오기</button>
              </form>
              <h2>D{window.sessionStorage.getItem("diday")}</h2>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end2">

            <Navbar.Text>
              <a href="/mypage">나의페이지</a>

              {(window.sessionStorage.getItem("nickname") === null) ? <div>
                <a href="/login" onClick={() => { <LoginPage /> }}>로그인하세요!</a></div>
                : <div> {window.sessionStorage.getItem("nickname")}님 반갑습니다.</div>}

              {(window.sessionStorage.getItem("nickname") === null) ? ""
                : <div><a href="/" onClick={() => {
                  alert('로그아웃 되었습니다.')
                  window.sessionStorage.removeItem('userid')
                  window.sessionStorage.removeItem('nickname')
                }}>로그아웃</a></div>
              }

            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
          <Route element={<PrivateRouter><WritePage /></PrivateRouter>} path="/write" />
          <Route element={<PostPage />} path="/:username/:postId" />
          <Route element={<PrivateRouter><MyPage /></PrivateRouter>} path="/mypage" />
        </Routes>
      </BrowserRouter>
      <FooterPage />
    </div>
  );
}

function TabContent(props) {

  const [list, setList] = useState([]);
  const [head, setHead] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/dailycard/list',
      method: 'get'
    }).then((res) => {
      setList(res.data); //스테이트건드리면 랜더링(유즈이펙트 없으면 계속돎) 
    });
  }, []); //deps(대괄호)를 빈칸이면  useEffect 한번만 동작됨.

  const openModal = () => { //모달 오픈
    setModalOpen(true);
  };

  const closeModal = () => { //모달 클로즈
    setModalOpen(false);
  };

  if (props.pushTab === 0) { // 첫번째 탭, 메인 탭
    return <Row xs={1} md={4} className="g-4">
      <React.Fragment> {/* 모달 오픈, 클로즈, 내용물data 전달 */}
        <Modal open={modalOpen} close={closeModal} head={head}>
        </Modal>
      </React.Fragment>
      {list.map((v) => (
        <Col>
          <a onClick={() => { //온클릭할때, 
            console.log(v.d_id);
            setHead(list.filter((value) => {
              if (v.d_id === value.d_id) {
                console.log(value);
                return true;
              }
            })[0]);
            openModal();
          }}>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{v.daily_name}</Card.Title>
                <Card.Text>{v.daily_content}</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>

  } else if (props.pushTab === 1) { //두번째 탭 
    return <h1>명예의 전당 들어갈곳</h1>
  } else if (props.pushTab === 2) { //세번째 탭
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