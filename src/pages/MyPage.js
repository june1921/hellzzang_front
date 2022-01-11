import { Button, Card, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "../components/modals/Modal";
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
      console.log(list);
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
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">My MISSON</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <Button variant="dark">SAVE</Button>{' '}
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">D-DAY</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="date"
        />
        <Button variant="dark">SAVE</Button>{' '}
      </InputGroup>

      <Button href="/write" variant="dark">포스팅하기</Button>{' '}



      <Container>
        <Row xs={1} md={2} className="g-4">
          {list.map((v) => (
            <Col>
              <React.Fragment>
                <Modal open={modalOpen} close={closeModal} title>
                </Modal>
              </React.Fragment>
              <a onClick={openModal}>
              <Card>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title>{v.dailyName}</Card.Title>
                  <Card.Text>
                    {v.dailyContent}
                  </Card.Text>
                </Card.Body>
              </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}


export default MyPage;