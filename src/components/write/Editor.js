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
                toolbar: [
                    [{ header: '1' }, { header: '2' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['blockquote', 'code-block', 'link', 'image']
                ],
            },
        });

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
          <form onSubmit={(e)=>{
            e.preventDefault();
            let title = e.target['0'].value
            let daily_content = e.target['1'].value
            let daily_content1 = e.target['2'].value
            let daily_content2 = e.target['3'].value
            let daily_content3 = e.target['4'].value
            let daily_content4 = e.target['5'].value
            let daily_content5 = e.target['6'].value

            console.log(title);
            console.log(daily_content);
            console.log(daily_content1);
            console.log(daily_content2);
            console.log(daily_content3);
            console.log(daily_content4);
            console.log(daily_content5);
            console.log("온서브밋");
          }}>
            <TitledInput
                placeholder="제목을 입력하세요"
                onChange={onChangeTitle}
                value={title}
            />
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
            <button>테스트버튼</button>
          </form>
        </EditorBlock>
    );
};

export default Editor;