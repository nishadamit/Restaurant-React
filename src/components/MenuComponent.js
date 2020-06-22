import React from 'react';
import { Card,Row,Container,Col } from 'react-bootstrap';

const RenderMenuItem = ({dish,DishSelect}) =>{
   return(
        <Card onClick={() =>DishSelect(dish.id)}  >
            <Card.Img width="100%" src={dish.image} alt={dish.name} />
            <Card.ImgOverlay>
                    <Card.Title>{dish.name}</Card.Title>
            </Card.ImgOverlay>
        </Card>
        
    )
}

function MenuComponent(props) {

    const menu = props.dishes.map((dish) =>{
        return(
            <Col key={dish.id} className="mt-1" md={6} >
                  <RenderMenuItem dish={dish} DishSelect={props.DishSelect}/>
            </Col>
         )
      })
        
        return (
             <Container>
                 <Row>
                      {menu}
                 </Row>
             </Container>
        )
}


export default MenuComponent
