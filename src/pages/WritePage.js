
import { FloatingLabel, InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import { useState } from 'react';


const WritePage = () => {

  return (
    <><form onSubmit={(e)=>{
      e.preventDefault();
      const formData = new FormData();
      let daily_name = e.target['0'].value
      let daily_content = e.target['1'].value
      let like_count = 0;

      console.log(e.target['0'].value);
      console.log(e.target['1'].value);
      
      formData.append("dailyName", daily_name);
      formData.append("dailyContent", daily_content);
      formData.append("likeCount", like_count);
      formData.append("userNum", window.sessionStorage.getItem("u_id"))

      axios({
        url: 'http://localhost:8080/write',
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
        <Form.Group controlId="formFile" className="mb-3"><Form.Control type="file" /></Form.Group>
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