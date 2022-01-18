
import { FloatingLabel, InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import { useState } from 'react';


const UpdatePage = () => {
  componentDidMount() {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    axios({
      url: 'http://localhost:8080/write' + window.sessionStorage.getItem("dId"),
      method:'',
    
    })
  }

  return (
    <><form onSubmit={(e)=>{
      e.preventDefault();
      const formData = new FormData();
      let dailyName = e.target['0'].value
      let dailyContent = e.target['1'].value
      let likeCount = 0;

      console.log(e.target['0'].value);
      console.log(e.target['1'].value);
      
      formData.append("dailyName", dailyName);
      formData.append("dailyContent", dailyContent);
      formData.append("likeCount", likeCount);
      formData.append("userNum", window.sessionStorage.getItem("userNum"))

      axios({
        url: 'http://localhost:8080/update' + window.sessionStorage.getItem("dId"),
        method: 'post',
        data: formData
      }).then((res) => {
          window.location = '/mypage';
       }); 
    }}>
        <br/>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Title</InputGroup.Text>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name='name'/>
        </InputGroup>
        <br/>
        <FloatingLabel controlId="floatingTextarea2" label="Content">
          <Form.Control
            as="textarea"
            name='name2'
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        <br/> 
        <Form.Group controlId="formFile" czsName="mb-3"><Form.Control type="file" /></Form.Group>
        <TagBoxContainer /> 
        <div>
          <Button type = "submit" variant="primary" size="lg" active 
          onClick={ ()=>{window.location="/mypage";}}
          >
            등록
          </Button>{'   '}
          <Button variant="secondary" size="lg" active>
            취소
          </Button>
        </div>  
    </form>
    </>
  );
};

export default WritePage;