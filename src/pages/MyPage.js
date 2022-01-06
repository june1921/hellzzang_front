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
      console.log(list);
    });
  }, []); //deps(대괄호)를 빈칸이면  useEffect 한번만 동작됨.


  return (
    <>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {list.map((v) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title>{v.daily_name}</Card.Title>
                  <Card.Text>
                    {v.daily_content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}


export default MyPage;