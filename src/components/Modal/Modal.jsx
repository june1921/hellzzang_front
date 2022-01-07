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
                        
                        <button className="close" onClick={close}>
                            {' '}
                            &times;{' '}
                        </button>
                    </header>
                    <main>
                        <div class="modal-body">
                            <div class="grid-container">
    
                                <div class="item1">사진이 들어 갈곳</div>
                                <div class="item2">{head.dailyContent}</div>


                            </div>
                        </div>
                        {props.children}
                    </main>
                    <footer>

                        {/* <button className="close" onClick={close}>

                            {' '}
                            close{' '}
                        </button> */}
                        <div class="item3">
                            <LikeButton/>
                        </div>
                        <div>
                            <a href='/' onClick={() => {
                                axios({
                                    url: "http://localhost:8080/dailycard/delete/" + head.did,
                                    method: 'get',
                                  }).then((res) => { })
                            }}>삭제</a>
                        </div>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

ReactDOM.render(<LikeButton />, document.getElementById('root'))
export default Modal;