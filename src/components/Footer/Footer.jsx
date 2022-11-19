import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Hoang's Food</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: District 3, Ho Chi Minh City, Viet Nam</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 1900561275</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <div className="d-flex justify-content-start align-items-center">
                <input type="email" placeholder="Enter your email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6" sm="12" xs="12">
            <p className="copyright__text">
              Copyright - 2022, website made by Hoang Nguyen. All Rights Reserved.
            </p>
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <div className="social__links d-flex align-items-center gap-4">
              <p className="m-0">Follow: </p>
              <span>
                <a href="https://www.facebook.com/profile.php?id=100072864520681">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                <a href="https://github.com/hoangnguyendev19">
                  <i className="ri-github-line"></i>
                </a>
              </span>

              <span>
                <a href="https://www.youtube.com/channel/UCX6FHphep04D0mYnuFkSTjg">
                  <i className="ri-youtube-line"></i>
                </a>
              </span>

              <span>
                <a href="https://www.linkedin.com/in/hoang-nguyen-0a8921242/">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
