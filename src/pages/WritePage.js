// import React from 'react';
// import EditorContainer from '../containers/write/Editorcontainer';
// import TagBoxContainer from '../containers/write/TagBoxContainer';
// import Responsive from '../components/common/Responsive';
// import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

// const WritePage = () => {
//     return (
//         <Responsive>
//             <EditorContainer />
//             <TagBoxContainer />
//             <WriteActionButtonsContainer />
//         </Responsive>
//     ); }

//  export default WritePage;

import { FloatingLabel, InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import TagBoxContainer from '../containers/write/TagBoxContainer';


const WritePage = () => {
  return (
    <><form onSubmit={(e)=>{
      e.preventDefault();
      const formData = new FormData();
      // let m_id = window.sessionStorage.getItem('m_id');
      let mission_id = 1;
      let daily_name = e.target['0'].value
      let daily_content = e.target['1'].value
      let like_count = 0;

      formData.append("mission_id", mission_id);
      formData.append("daily_name", daily_name);
      formData.append("daily_content", daily_content);
      formData.append("like_count", like_count);
      formData.append("u_id", sessionStorage.getItem("u_id"));

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
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
        <TagBoxContainer /> 

        <div>
          <Button type = "submit" variant="primary" size="lg" active onClick={
            ()=>{window.location="/mypage";}}>
            등록
          </Button>{' '}
          <Button variant="secondary" size="lg" active>
            취소
          </Button>
        </div>
        
    </form>
    </>
  );
};

export default WritePage;