import React, { Component } from 'react';
import { Row,Container,Col,Navbar,Jumbotron,Nav, Button,Modal,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faInfo,faList,faAddressCard,faSignInAlt } from '@fortawesome/free-solid-svg-icons';

class HeaderComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             showNavbrandOnToggle:true,
             OpenModal:false
        }
        this.username = React.createRef();
        this.password = React.createRef();
        this.remeberme = React.createRef();
    }
    

    handleOnclick = () =>{
        this.setState({showNavbrandOnToggle:false})
    }

    OpenModal = () =>{
          this.setState({OpenModal:true})
    }

    handleClose = () =>{
        this.setState({OpenModal:false})
    }

    handleOnSubmit = (e) =>{
        console.log("THIS",this.remeberme.checked)
        e.preventDefault()
        this.handleClose()
        alert("Username:" +this.username.current.value+" Password: "+this.password.current.value)
    }

    render() {

        

        return (
            <>
                <Navbar style={{backgroundColor:"#512DA8"}} expand="sm" >

                    <Navbar.Toggle onClick={this.handleOnclick}  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  >
                        <Nav className="header-link-color">
       {       this.state.showNavbrandOnToggle  && <Navbar.Brand>
                            <img src="assets/images/logo.png" height="40" width="51" alt="The Red Cafe" />
                        </Navbar.Brand>}
                        <Nav.Link href="/home"><FontAwesomeIcon icon={faHome} size="2x" color="white" />Home</Nav.Link>
                        <Nav.Link href="/aboutus"><FontAwesomeIcon icon={faInfo} size="2x" color="white" />About Us</Nav.Link>
                        <Nav.Link href="/menu"><FontAwesomeIcon icon={faList} size="2x" color="white" />Menu</Nav.Link>
                        <Nav.Link href="/contactus"><FontAwesomeIcon icon={faAddressCard} size="2x" color="white" />Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Nav.Link><Button style={{backgroundColor:"#512DA8"}} onClick={this.OpenModal} ><FontAwesomeIcon icon={faSignInAlt} color="white" />Login</Button></Nav.Link>
                    </Nav>
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
                <Modal show={this.state.OpenModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.handleOnSubmit} >
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" id="username" name="username" ref={this.username} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" id="password" name="password" ref={this.password} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Check type="checkbox" label="Remember me" name="remeberme" id="remeberme" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default HeaderComponent
