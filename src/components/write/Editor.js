import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import onChangeField from '../../containers/write/Editorcontainer';



const EditorBlock = styled(Responsive)`
/* 페이지 위아래 여백 지정*/
padding-top: 5rem;
padding-bottom: 5rem;
`;

const TitledInput = styled.input`
font-size: 3rem;
outline: none;
padding-bottom: 0.5rem;
border: none;
border-bottom: 1px solid ${palette.gray[4]};
margin-bottom: 2rem;
width: 100%
`;

const QuillWrapper = styled.div`
.ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
}
.ql-editor.ql-blank::before {
    left: 0px;
}`;

const Editor = ({title, body, onChangeField}) => {

    //Quill 적용할 DivElement 설정
    const quillElement = useRef(null);

    //Quill 인스턴스를 설정
    const quillInstance = useRef(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 작성하세요.',
            modules: {
                // 더많은 옵션: http://quilljs.com/docs/modules/toolbar/ 참고
                toolbar: [
                    [{ header: '1' }, { header: '2' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['blockquote', 'code-block', 'link', 'image']
                ],
            },
        });

        //quill에 text-change 이벤트 핸들러 등록
        //참고: https://quillhs.com/docs/api/#events
        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                onChangeField({ key: 'body', value: quill.root.innerHTML });
            }
        })
    }, [onChangeField]);

    const onChangeTitle = e => {
        onChangeField({ key: 'title', value: e.target.value });
    };

    return (
        <EditorBlock>

            <form onSubmit={(e) => { //회원가입 > 회원정보 DB에 저장하는 곳
                e.preventDefault();
                const formData = new FormData();

                const title = e.target['0'].value;
                const body = e.target['1'].value;
                const body1 = e.target['2'].value;
                const body2 = e.target['3'].value;
                formData.append("title", title);
                formData.append("body", body);
                formData.append("body1", body1);
                formData.append("body2", body2);
                console.log(title, body, body1, body2);

            }}>
                <button>테스트버튼</button>

            

            
            <TitledInput
                placeholder="제목을 입력하세요"
                onChange={onChangeTitle}
                value={title}
            />
            <QuillWrapper
            value={body}>
                <div ref={quillElement} />
            </QuillWrapper>
            </form>
        </EditorBlock>
    );
};

export default Editor;