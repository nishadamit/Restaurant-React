import React, { Component } from 'react';
import { Row,Container,Col,Navbar,Jumbotron,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faInfo,faList,faAddressCard } from '@fortawesome/free-solid-svg-icons';

class HeaderComponent extends Component {
    render() {
        return (
            <>
                <Navbar style={{backgroundColor:"#512DA8"}} expand="sm" >
                    <Navbar.Brand>
                            <img src="assets/images/logo.png" height="40" width="51" alt="The Red Cafe" />
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto header-link-color">
                        <Nav.Link href="/home"><FontAwesomeIcon icon={faHome} size="2x" color="white" />Home</Nav.Link>
                        <Nav.Link href="/aboutus"><FontAwesomeIcon icon={faInfo} size="2x" color="white" />About Us</Nav.Link>
                        <Nav.Link href="/menu"><FontAwesomeIcon icon={faList} size="2x" color="white" />Menu</Nav.Link>
                        <Nav.Link href="/contactus"><FontAwesomeIcon icon={faAddressCard} size="2x" color="white" />Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Jumbotron style={{backgroundColor:"#9575CD"}} >
                    <Container>
                        <Row>
                            <Col sm={5}>
                                <h1>The Red Cafe</h1>
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
