import React from 'react';
import { Card,Row,Container,Col,Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    console.log("props",props)
    if(props.dish != null){
        return (
            <Container>
                <Row>
                 <Breadcrumb  >
                       <Breadcrumb.Item ><Link to="/home" >Home</Link></Breadcrumb.Item>
                       <Breadcrumb.Item ><Link to="/menu" >Menu</Link></Breadcrumb.Item>
                       <Breadcrumb.Item active >{props.dish.name}</Breadcrumb.Item>
                  </Breadcrumb>
                </Row>
                <Row>
                <h3>{props.dish.name}</h3>
                </Row>
               <Row className="mt-1">
                    <Col key={props.dish.id}  md={6} >
                           <RenderDish dish={props.dish} key={props.dish.id} />
                    </Col>
                    <Col md={6}>
                    {props.comments.map((comment)=>{
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
