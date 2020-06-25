import React from 'react';
import { Card,Row,Container,Col,Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RenderMenuItem = ({dish}) =>{
   return(
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <Card.Img width="100%" src={dish.image} alt={dish.name} />
                <Card.ImgOverlay>
                        <Card.Title>{dish.name}</Card.Title>
                </Card.ImgOverlay>
            </Link>
        </Card>
        
    )
}

function MenuComponent(props) {

    const menu = props.dishes.map((dish) =>{
        return(
            <Col key={dish.id} className="mt-1" md={6} >
                  <RenderMenuItem dish={dish}/>
            </Col>
         )
      })
        
        return (
             <Container>
                 <Row>
                 <Breadcrumb  >
                       <Breadcrumb.Item href="/home" >Home</Breadcrumb.Item>
                       <Breadcrumb.Item active>Menu</Breadcrumb.Item>
                  </Breadcrumb>
                 </Row>
                 <Row>
                     <h3>Menu</h3>
                 </Row>
                 <hr/>
                 <Row>
                    {menu}
                 </Row>
             </Container>
        )
}


export default MenuComponent
