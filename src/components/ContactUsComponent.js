import React from 'react';
import { Row,Container,Col,ButtonGroup,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faFax,faEnvelope,fa} from '@fortawesome/free-solid-svg-icons';

function ContactUsComponent() {
    return (
         <Container>
             <Row className="mb-2" style={{textAlign:"center"}} >
                 <Col md={6}  >
                        <h1>Location Information</h1>
                        <h3>Our Address</h3>
                        <p>
                            D-13 Near Kfc, Sindhiya <br></br> Building Canaught Place ,<br></br>New Delhi,India<br></br>
                            <FontAwesomeIcon icon={faPhoneAlt} />:&nbsp;+91 9898989898<br></br>
                            <FontAwesomeIcon icon={faFax} />: +91 9876543212 <br></br>
                            <FontAwesomeIcon icon={faEnvelope} />: theredcafe@restaurant.com
                        </p>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="primary"><FontAwesomeIcon icon={faPhoneAlt} />Call</Button>
                            <Button variant="info">Skype</Button>
                            <Button variant="success">Email</Button>
                        </ButtonGroup>
                        
                 </Col>
                 <Col md={6} >
                 <h1>Location Map</h1>
                 </Col>
             </Row>
         </Container>
    )
}

export default ContactUsComponent;
