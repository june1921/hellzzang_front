//import React, {Component, component } from "react";

import React from "react";
import image2 from "./다이어트.jpg";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const MyPage = () => {
    return  (
      //연동시켜야함
      <Container>
       <Row>
    <Col xs={6}>김주희님의 미션:</Col> 

  </Row>
 

  <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 10}).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>카드 제목</Card.Title>
              <Card.Text>
                여기는 카드의 내용이 들어갈 부분이라고 생각이 드는곳임
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    

      
       
   
  </Container>
    )
}


export default MyPage;