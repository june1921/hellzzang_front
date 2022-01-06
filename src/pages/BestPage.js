const BestPage = () => {
    props.pushTaps === 2

    return <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 6 }).map((_, idx) => (

      <Col>
        <Card border="info" style={{ width: '30rem' }}>

          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Button variant="info">프로필 들어가기</Button>{' '}
            </Nav>
          </Card.Header>

          <Card.Body>
            <Card.Title>100일 다이어트 성공</Card.Title>
            <Card.Text>
              여기는 카드의 내용이 들어갈 부분이라고 생각이 드는곳임
            </Card.Text>
          </Card.Body>

        </Card>
      </Col>
    ))}
  </Row>
}