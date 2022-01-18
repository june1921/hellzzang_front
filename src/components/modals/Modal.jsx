import React, { useEffect, useRef, useState } from 'react';
import "./ModalDesign.css";
import LikeButton from './LikeButton';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Route, Navigate } from 'react-router-dom';

const Modal = (props) => {

    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, head } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>

                        {head.dailyName}
                        {console.log(head)}
                        {console.log(head.did)}
                        <button className="close" onClick={close}>
                            {' '}
                            &times;{' '}
                        </button>
                    </header>
                    <main>
                        <div className="modal-body">
                            <div className="grid-container">

                                <div className="item1">사진이 들어 갈곳</div>
                                <div className="item2">{head.dailyContent}</div>

                            </div>
                        </div>
                        {props.children}
                    </main>
                    <footer>

                        {/* <button className="close" onClick={close}>

                            {' '}
                            close{' '}
                        </button> */}
                        <div className="item3">
                            <a href='#' onClick={() => {
                                axios({
                                    url: "http://localhost:8080/dailycard/likebtn/" + head.did,
                                    method: 'get',
                                }).then(() => { });
                                /*
                                axios({
                                    url: "http://localhost:8080/dailycard/likebtn/" + head.did,
                                    method: 'post',
                                }).then((res) => { console.log(res.dId) })
                                */

                            }}><LikeButton /></a>

                        </div>
                        <div>
                            <a href='/' onClick={() => {
                                axios({
                                    url: "http://localhost:8080/dailycard/delete/" + head.did,
                                    method: 'get',
                                }).then((res) => { })
                            }}>삭제</a>
                        </div>
                        <div>
                        <a href='/update' onClick={() => {
                                axios({
                                    url: "http://localhost:8080/dailycard/update/" + head.did, //선택한 게시물의 Dailycard 연번
                                    method: 'get',
                                }).then((res) => {
                                    window.sessionStorage.setItem("dId", head.did);
                                    window.sessionStorage.setItem("dailyName", head.dailyName);
                                    window.sessionStorage.setItem("dailyContent", head.dailyContent);
                                    window.sessionStorage.setItem("likeCount", head.likeCount);
                                    window.sessionStorage.setItem("userNum", window.sessionStorage.getItem("userNum"));
                                })
                            }}>수정</a>
                        </div>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

ReactDOM.render(<LikeButton />, document.getElementById('root'))
export default Modal;