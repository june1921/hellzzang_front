import React from 'react';
import "./ModalDesign.css";
import LikeButton from './LikeButton';
import ReactDOM  from 'react-dom';

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
                    <main>
                        <div class="modal-body">
                            <div class="grid-container">
                                <div class="item1">MainContent</div>
                                <div class="item2">ToDoList</div>

                                <div class="item3">
                                    <LikeButton/>
                                </div>
                            </div>
                        </div>
                        {props.children}
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

ReactDOM.render(<LikeButton />, document.getElementById('root') )
export default Modal;