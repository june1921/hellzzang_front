import React from 'react';
import "./ModalDesign.css";
import images from './images.jpg';

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            {' '}
                            &times;{' '}
                        </button>
                    </header>
                    <main>{props.children}
                        <div class="container">
                            <div class="item"><img src={images} alt="검거" /></div>
                            <div class="item">언더아머 단속중</div>
                            <div class="item">좋아요</div>
                        </div>
                    </main>
                    <footer>
                        <button className="close" onClick={close}>
                            {' '}
                            close{' '}
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;