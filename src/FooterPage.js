import React from 'react';
import { Col, Container, Row, Footer, Button } from 'mdbreact';
import { Card, ListGroup } from 'react-bootstrap';

export class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
                <Container className="text-left">
                    <Row>
                        <Col md="6">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">이용안내</h5>
                            <li><a href="#!">주소: 서울특별시 금천구 헬짱연구소</a></li>
                            <li><a href="#!">전화번호: 010-2546-4688</a></li>
                            <li><a href="#!">인스타: @9_2.8</a></li>
                            <li><a href="#!">유투브 주소: https://www.youtube.com/channel/UCCJPL0cXv-qeowKSQAS_13g</a></li>

                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">헬짱소개</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">💪정남훈</a></li>
                                <li><a href="#!">💪박준형</a></li>
                                <li><a href="#!">💪김주희</a></li>
                                <li><a href="#!">💪이채현</a></li>
                            </ul>
                        </Col>

                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">이용약관</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">🔥3대 500치는 법🔥</a></li>
                                <li><a href="#!">🔥올바른 헬린이 생활🔥</a></li>
                                <li><a href="#!">🔥바른 자세🔥</a></li>
                                <li><a href="#!">🔥하루에 아몬드 10알🔥</a></li>
                            </ul>
                        </Col>

                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <ul className="list-unstyled">
                                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">HELLZZANG</h5>
                                <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">카카오톡 문의  :   365고객센터</h6>
                                <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">1:1 문의  :     24시간 접수 가능</h6>
                                <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">광고 문의  :     메일로 문의</h6>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <div className="text-center py-3">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item"><a href="/register" className="btn btn-danger btn-rounded">Sign up!</a></li>
                    </ul>
                </div>
                <hr />
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>

                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;