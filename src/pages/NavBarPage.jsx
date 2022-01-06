import { Navbar, Container, Nav, Row, Card, Button } from "react-bootstrap";
import axios from 'axios';
import LoginPage from './LoginPage';
import React, { useState, useEffect, useReducer } from "react";



const NavBarPage = () => {
    let [sessionid, setsessionid] = useState([]);
    return (
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
                        <a href="/mypage">나의페이지</a>

                        {(window.sessionStorage.getItem("nickname") === null) ? <div>
                            <a href="/login" onClick={() => { <LoginPage /> }}>로그인하세요!</a></div>
                            : <div> {window.sessionStorage.getItem("nickname")}님 반갑습니다. </div>
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


}

export default NavBarPage;