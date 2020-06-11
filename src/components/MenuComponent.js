import React, { Component } from 'react';
import { Card,Row,Container,Col } from 'react-bootstrap';

export class MenuComponent extends Component {

    constructor(props) {
        super(props)
    
            this.state = {
              }
    }

    render() {

        console.log("props",this.props)
        
        const menu = this.props.dishes.map((dish) =>{
            return(
                <Col key={dish.id} className="mt-1" md={6} >
                    <Card onClick={() =>this.props.DishSelect(dish.id)}  >
                        <Card.Img width="100%" src={dish.image} alt={dish.name} />
                        <Card.ImgOverlay>
                                <Card.Title>{dish.name}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
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
}

export default MenuComponent
