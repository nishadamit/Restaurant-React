import React from 'react';
import { Row,Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faFax,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';
function FooterComponent() {
    return (
        <div className="footer-background" >
            <Row>
                <Col sm={8} >
                      <Row>
                          <Col xs={7} className="footer-links" >
                                <h3>Links</h3>
                                <ul>
                                    <li><a href="#" >Home</a></li>
                                    <li><a href="#" >About</a></li>
                                    <li><a href="#" >Menu</a></li>
                                    <li><a href="#" >Contact</a></li>
                                </ul>
                          </Col>
                          <Col xs={5} >
                                <h3>Our Address</h3>
                                <p>
                                 D-13 Near Kfc, Sindhiya <br></br> Building Canaught Place ,<br></br>New Delhi,India<br></br>
                                 <FontAwesomeIcon icon={faPhoneAlt} />:&nbsp;+91 9898989898<br></br>
                                 <FontAwesomeIcon icon={faFax} />: +91 9876543212 <br></br>
                                 <FontAwesomeIcon icon={faEnvelope} />: buzztime@restaurant.com
                                 </p>
                                
                          </Col>
                      </Row>
                </Col  >
                <Col sm={4} className="footer-links-social-icon" >
                     <SocialIcon url="http://google.com/" />
                     <SocialIcon url="http://facebook.com/" />
                     <SocialIcon url="https://in.linkedin.com/" />
                     <SocialIcon url="http://twitter.com/" />
                     <SocialIcon url="http://youtube.com/" />
                </Col>
            </Row>
            <Row className="footer-copyright" >
                <Col>
                    <p>	&copy; Copyright 2020 buzztime</p>
                </Col>
            </Row>
        </div>
    )
}

export default FooterComponent;
