# 리액트 템플릿, 참고 사이트

https://github.com/brillout/awesome-react-components#ui-frameworks \
https://layoutit.com/build \
https://github.com/nowoesiy/Daily-Mission-Front-Web


# Editorcontainer.js 참고사항

위 컨테이너 컴포넌트에서는 title 값과 body 값을 리덕스 스토어에서 불러와 Editor 컴포넌트에 전달해 주었습니다.
참고로 Quill 에디터는 일반 input이나 textarea가 아니기 때문에 onChange와 value 값을 사용하여 상태를 관리할 수 없습니다.
따라서 지금은 에디터에서 값이 바뀔 때 리덕스 스토어에 값을 넣는 작업만 하고, 리덕스스토어의 값이 바뀔 때 에디터 값이 바뀌게 하는
작업은 추후 포스트 수정 기능을 구현할 때 처리하겠습니다.

onChangeField 함수는 useCallback으로 감싸주었는데, 이는 Editor 컴포넌트에서 사용할 useEffect에서 onChangeField를 사용할 것이기
때문입니다. onChangeField를 useCallback으로 감싸주어야만 나중에 Editor에서 사용할 useEffect가 컴포넌트가 화면에 나타났을 때
딱 한 번만 실행되기 때문입니다.

또한, 사용자가 WritePage에서 벗어날 때는 데이터를 초기화해야 합니다. 컴포넌트가 언마운트 될 때 useEffect로 INITIALIZE 액션을
발생시켜서 리덕스의 write 관련 상태를 초기화해 줍니다. 만약 초기화를 하지 않는다면, 포스트 작성 후 다시 글쓰기 페이지에 들어왔을 때
이전에 작성한 내용이 남아있게 됩니다.

컨테이너 컴포넌트를 다 만들었으면 WritePage에서 기존 Editor를 EditorContainer로 대체시켜 주세요.

# 설치해야하는 것
npm add quill (글 작성하는 에디터)
npm install antd
npm install redux-saga

npm install qs 
=> API를 사용할 때 파라미터로 문자열들을 받아 와서 직접 조합해도 되지만, 여기서는 qs 라이브러리를 사용하여 쿼리 값을
생성하겠습니다. 이 라이브러리를 사용하면 쿼리 값을 더 편리하게 생성하고 JSON으로 변환 할 수 있습니다.

npm install sanitize-html
=> sanitize-html이라는 라이브러리를 사용하여 HTML을 필터링해 보겠습니다. 이 라이브러리는 HTML을 작성하고 보여 주어야 하는 서비스에서 매우 유용합니다. 단순히 HTML을 제거하는 기능 뿐만 아니라 특정 HTML만 허용하는 기능도 있기 때문에 글쓰기 API에서 사용하면 손쉽게악성 스크립트 삽입을 막을 수 있습니다.

npm i redux-actions
npm i redux-saga-effects