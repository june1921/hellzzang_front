import { Button, Card, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import React, { useEffect, useState } from "react";
import image2 from "./다이어트.jpg";
import axios from "axios";

const MyPage = () => {

const [list, setList] = useState([]);

useEffect(() => {
  axios({
    url: 'http://localhost:8080/dailycard/list',
    method: 'get'
  }).then((res) => {
    setList(res.data); //스테이트건드리면 랜더링(유즈이펙트 없으면 계속돎) 
  });
}, []); //deps(대괄호)를 빈칸이면  useEffect 한번만 동작됨.
    
const [modalOpen, setModalOpen] = useState(false);

const openModal = () => {
  setModalOpen(true);
};
const closeModal = () => {
  setModalOpen(false);
};

    return (
  //연동시켜야함
  <Container>
    <Row>
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default"><h5>MY MISSON</h5></InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <h5>SAVE</h5>
          </Button>
        </InputGroup>
        <br />

      </>

      <>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default"><h5>D-DAY</h5></InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="date"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <h5>SAVE</h5>
          </Button>
        </InputGroup>
        <br />

      </>

    </Row>

    <>
      <div className="mb-2">
        <Link to="/write">
          <Button variant="secondary" size="lg">
            포스팅하기
          </Button>
        </Link>
      </div>
    </>


    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <React.Fragment>
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
            </Modal>
          </React.Fragment>
          <a onClick={openModal}>
            <Card>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>카드 제목</Card.Title>
                <Card.Text>
                  여기는 카드의 내용이 들어갈 부분이라고 생각이 드는곳임
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  </Container>
  );
}


export default MyPage;