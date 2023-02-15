import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import t from '../Component/images/twit.jpg';
import face from '../Component/images/f1.jpg';
import  i from '../Component/images/insta.jpg';
import  p from '../Component/images/phone.jpg';

function Footer() {
  return (
    <>
  
    <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" } }>
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className="d-flex align-items-center ">
                        <div className="footer-shroot mx-2">Privacy Policy</div>
                        <div className="footer-shroot mx-2">Company Contact</div>
                    </Col>
                    <Col
                        sm="6"
                        className="d-flex justify-content-end align-items-center ">
                        <div className="d-flex pt-3 mx-2">
                            <img width="20px" height="20px" src={p} alt="" />
                            <p className="footer-phone">01004236645</p>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={face } alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={i} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={t} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 

      </>
  )};


export default Footer;
