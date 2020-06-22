import React from 'react';
import { Card,Row,Container,Col,Navbar,Jumbotron } from 'react-bootstrap';

function FooterComponent() {
    return (
        <Container>
            <Row>
                <col sm={6} >
                      <Row>
                          <Col sm={} >
                          <ListGroup>
                                <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                                <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                                <ListGroup.Item variant="success">Success</ListGroup.Item>
                                <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                            </ListGroup>
                          </Col>
                      </Row>
                </col>
                <col sm={6} >
                </col>
            </Row>
        </Container>
    )
}

export default FooterComponent;
