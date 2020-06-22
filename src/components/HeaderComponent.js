import React, { Component } from 'react';
import { Card,Row,Container,Col,Navbar,Jumbotron } from 'react-bootstrap';

class HeaderComponent extends Component {
    render() {
        return (
            <>
                <Navbar style={{backgroundColor:"#512DA8"}}>
                    <Container>
                        <Navbar.Brand>BuzzTime</Navbar.Brand>
                    </Container>
                </Navbar>
                <Jumbotron style={{backgroundColor:"#9575CD"}} >
                    <Container>
                        <Row>
                            <Col sm={5}>
                                <h1>BuzzTime</h1>
                                <p>We take inspiration from world's best cuisines, and create a unique fusion experience.Our lipsmacking creations will tickle your culinary senses!</p>
                            </Col>
                        </Row>
                    </Container>      
                </Jumbotron>
            </>
        )
    }
}

export default HeaderComponent
