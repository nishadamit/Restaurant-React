import React from 'react';
import { Row,Container,Col,Card} from 'react-bootstrap';

const RenderItem = ({item}) =>{
    return(
        <Card>
            <Card.Img  src={item.image} />
            <Card.Body>
               <Card.Title>{item.name}</Card.Title>
               {item.designation ? <Card.Subtitle>{item.designation}</Card.Subtitle> :null }
               <Card.Text>{item.description} </Card.Text>
            </Card.Body>
        </Card>
    )
}


function HomeComponent(props) {
    // console.log("this",props)

    return (
           <Container>
               <Row className="mb-4">
                   <Col md={4} >
                       <RenderItem item ={props.dish} />
                   </Col>
                   <Col md={4} >
                       <RenderItem item ={props.promotion} />
                   </Col>
                   <Col md={4} >
                        <RenderItem item ={props.leader} />
                   </Col>
               </Row>
           </Container>
    )
}

export default HomeComponent;
