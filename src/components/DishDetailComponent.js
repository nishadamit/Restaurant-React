import React, { Component } from 'react';
import { Card,Row,Container,Col } from 'react-bootstrap';

export class DishDetailComponent extends Component {

    render() {
        if(this.props.dish != null){
            return (
                <Container>
                   <Row className="mt-1">
                        <Col key={this.props.dish.id}  md={6} >
                            <Card  >
                                <Card.Img src={this.props.dish.image} alt={this.props.dish.name} />
                                <Card.Body>
                                <Card.Title>{this.props.dish.name}</Card.Title>
                                <Card.Text>{this.props.dish.description}</Card.Text>
                                </Card.Body>
                            </Card> 
                        </Col>
                        <Col md={6}>
                        {
                            this.props.dish.comments.map((comment)=>{
                               return(
                                   <Row key={comment.id} >
                                       <Col>
                                            <p>{comment.comment}</p>
                                            <p>--{comment.author} {comment.date}</p>
                                       </Col>
                                   </Row>
                               )
                            })
                        }
                        </Col>
                    </Row>
                 </Container>
                  )
             }
             return null
          }
}

export default DishDetailComponent
