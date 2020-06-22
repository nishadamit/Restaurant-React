import React from 'react';
import { Card,Row,Container,Col } from 'react-bootstrap';

const RenderComments = ({comment}) =>{
    return(
        <Row >
            <Col>
                <p>{comment.comment}</p>
                <p>--{comment.author} {comment.date}</p>
            </Col>
       </Row>
    )
}

const RenderDish =({dish}) =>{
    return(
        <Card  >
            <Card.Img src={dish.image} alt={dish.name} />
            <Card.Body>
            <Card.Title>{dish.name}</Card.Title>
            <Card.Text>{dish.description}</Card.Text>
            </Card.Body>
        </Card> 
    )
}

function DishDetailComponent(props) {
    if(props.dish != null){
        return (
            <Container>
               <Row className="mt-1">
                    <Col key={props.dish.id}  md={6} >
                           <RenderDish dish={props.dish} key={props.dish.id} />
                    </Col>
                    <Col md={6}>
                    {props.dish.comments.map((comment)=>{
                            return(
                                <RenderComments comment={comment} key={comment.id} />
                            )}) }
                    </Col>
                </Row>
             </Container>
              )
         }
         return null
}
export default DishDetailComponent
