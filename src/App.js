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
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import axios from 'axios';
import { HeatMapOutlined } from "@ant-design/icons";


function App() {
  //커밋

  const [isLogin, setIsLogin] = useState(false)

  const backTotheLogin = () => <Navigate to="/login" />;

  let [pushTab, setPushTab] = useState(0);
  let [스위치, 스위치변경] = useState(false);
  let [sessionid, setsessionid] = useState([]);
  let [rand, setrand] = useState(1);
  let [diday, setdiday] = useState(-0);

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
        window.sessionStorage.setItem("u_id", response.data['0'].uid);
        console.log(response.data['0']);
        console.log(window.sessionStorage.getItem("userid"));
        console.log(window.sessionStorage.getItem("u_id") + "유아이디");
        setrand(0);
      });
    }
  }, []);
 
  useEffect(()=>{
      axios({
        url: 'http://localhost:8080/mission',
        method: 'get',
        params: { userid: window.sessionStorage.getItem("userid") }
      }).then((res) => { 
        let last = new Date(res.data['0'].last_day)
        let now = new Date();
        const diday = Math.ceil((now - last) / 1000 / 60 / 60 / 24);
        window.sessionStorage.setItem("diday", diday);
      })
  }, []);

  return (
    <div className="App">
      <div className="HeaderBackgroundImg">
      <Navbar expand="lg">

        <Container>
          <Navbar.Brand href="/">
            <div className="logo">HELL ZZANG</div>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            
              <div className="dDayText">D {window.sessionStorage.getItem("diday")}</div>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end2">

              <Navbar.Text>
            
                <a href="/mypage"><div className="smallText">🔒 마이페이지</div></a>

                <div className="smallText">
                  {(window.sessionStorage.getItem("nickname") === null) 
                  ? <div><br/><a href="/login" onClick={() => { <LoginPage /> }}>로그인하세요!</a></div>
                  : <div> {window.sessionStorage.getItem("nickname")}님 반갑습니다.</div>}

                  {(window.sessionStorage.getItem("nickname") === null) 
                  ? ""
                  : <div className="smallText"><a href="/" onClick={() => {
                    alert('로그아웃 되었습니다.')
                    window.sessionStorage.removeItem('userid')
                    window.sessionStorage.removeItem('nickname')
                  }}>로그아웃</a></div>
                }</div>
               
              </Navbar.Text>


          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>


      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); setPushTab(0); }}><div className="mainName">MAIN</div></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => { 스위치변경(false); setPushTab(2); }}><div className="bestName">BEST</div></Nav.Link>
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

  let i = 1;
  

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/dailycard/list',
      method: 'get'
    }).then((res) => {
      setList(res.data); //스테이트건드리면 랜더링(유즈이펙트 없으면 계속돎) 
      console.log(list);
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
            console.log(v.did);
            setHead(list.filter((value) => {
              if (v.did === value.did) {
                console.log(value);
                return true;
              }
            })[0]);
            openModal();
          }}>
            <Card>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>{v.dailyName}</Card.Title>
                <Card.Text>{v.dailyContent}</Card.Text>
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