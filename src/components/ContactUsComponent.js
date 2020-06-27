import React,{ Component } from 'react';
import { Row,Container,Col,ButtonGroup,Button,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faFax,faEnvelope} from '@fortawesome/free-solid-svg-icons';

class ContactUsComponent extends Component  {

    constructor(props) {
        super(props)
    
        this.state = {
             firstname:'',
             lastname:'',
             phonenumber:'',
             email:'',
             agree:false,
             option:'Phone Number',
             feedback:'',
             touched:{
                 firstname:false,
                 lastname:false
             }
        }
    }

   handleOnchange = (e) =>{
       
    const target = e.target;
    const value = target.type ==='checkbox' ? target.checked :target.value;
    const name = target.name;
    this.setState({[name]:value})
          
          
    }

    handleOnSubmit = (e) =>{
          e.preventDefault();
          alert("the state is" + JSON.stringify(this.state))
    }

    handleOnBlur = (field) =>(event) =>{
        console.log("hii i am callled")
             this.setState({
                 touched:{...this.state.touched,[field]:true}
             },console.log("state",this.state.touched))
    }

    validateForm =(firstname,lastname) =>{
           const errors ={
               firstnameerror:'',
               lastnameerror:''
           }

           if(this.state.touched.firstname && firstname.length < 3)
              errors.firstnameerror ="first name should be > than 3 characters";
           else if(this.state.touched.firstname && firstname.length > 10)
              errors.firstnameerror ="first name should be < than 10 characters";

          return errors;
    }
    

    render(){

        const errors = this.validateForm(this.state.firstname)

        console.log("errors",errors)

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
                <Row>
                        <h3>Send us Your Feedback</h3>
                        </Row>
                        <Form onSubmit={this.handleOnSubmit} noValidate validated={false} >
                            <Form.Group as={Row} >
                                <Form.Label column="true" sm={2}>First Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" id="firstname" name="firstname" placeholder="First Name" required
                                    value={this.state.firstname}
                                    onChange={this.handleOnchange}
                                    onBlur={this.handleOnBlur('firstname')}
                                    />
                                        <Form.Text className="text-muted">{errors.firstnameerror}</Form.Text>
                                </Col>
                                
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column="true" sm={2}>Last Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" id="lastname" name="lastname" placeholder="Last Name" required
                                    value={this.state.lastname}
                                    onChange={this.handleOnchange} 
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column="true" sm={2}>Phone Number</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" id="phonenumber" placeholder="Phone Number" name="phonenumber" required
                                       value={this.state.phonenumber}
                                       onChange={this.handleOnchange} 
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Email</Form.Label>
                                <Col sm={10}>
                                   <Form.Control column="true" sm={10} type="text" id="email" placeholder="Email" name="email"  required
                                       value={this.state.email} 
                                       onChange={this.handleOnchange}
                                   />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Col sm={{ span: 4, offset: 2 }} >
                                      <Form.Check type="checkbox" id="agree" name="agree" className="mb-2" label="May we contact you?" 
                                          checked={this.state.agree} 
                                          onChange={this.handleOnchange}  
                                     />
                                </Col>
                                <Col sm={{ span: 3, offset: 3 }} >
                                <Form.Control
                                    as="select"
                                    id="inlineFormCustomSelect"
                                >
                                    <option value="0">Phone Number</option>
                                    <option value="1">Email</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column="true" sm={2}>Your Feedback</Form.Label>
                                <Col sm={10}>
                                   <Form.Control column="true" sm={10} as="textarea" rows="7" id="feedback" name="feedback"
                                      value={this.state.feedback} 
                                      onChange={this.handleOnchange} 
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 2, offset: 2 }}>
                                      <Button variant="primary" type="submit">Send Feedback</Button>
                                </Col>
                            </Form.Group>
                            
                        </Form>
            </Container>
       )

    }

}

export default ContactUsComponent;

