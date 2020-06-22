import React from 'react';
import { Card,Row,Container,Col } from 'react-bootstrap';


function DishDetailComponent(props) {
    if(props.dish != null){
        return (
            <Container>
               <Row className="mt-1">
                    <Col key={props.dish.id}  md={6} >
                        <Card  >
                            <Card.Img src={props.dish.image} alt={props.dish.name} />
                            <Card.Body>
                            <Card.Title>{props.dish.name}</Card.Title>
                            <Card.Text>{props.dish.description}</Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col md={6}>
                    {
                        props.dish.comments.map((comment)=>{
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

export default DishDetailComponent
