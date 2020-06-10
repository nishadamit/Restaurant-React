import React, { Component } from 'react';
import { Media,Row,Container,Col } from 'react-bootstrap';

export class MenuComponent extends Component {

    constructor(props) {
        super(props)
    
            this.state = {
                dishes: [
                    {
                      id: 0,
                      name:'Uthappizza',
                      image: 'assets/images/uthappizza.png',
                      category: 'mains',
                      label:'Hot',
                      price:'4.99',
                      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                   {
                      id: 1,
                      name:'Zucchipakoda',
                      image: 'assets/images/zucchipakoda.png',
                      category: 'appetizer',
                      label:'',
                      price:'1.99',
                      description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                      {
                      id: 2,
                      name:'Vadonut',
                      image: 'assets/images/vadonut.png',
                      category: 'appetizer',
                      label:'New',
                      price:'1.99',
                      description:'A quintessential ConFusion experience, is it a vada or is it a donut?'     
                       },
                     {
                      id: 3,
                      name:'ElaiCheese Cake',
                      image: 'assets/images/elaicheesecake.png',
                      category: 'dessert',
                      label:'',
                      price:'2.99',
                      description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'       
                     }
                   ]
             
        }
    }
    

    render() {
        
        const menu = this.state.dishes.map((dish) =>{
            return(
                <Col className="mt-5" lg={12} >
                    <Media key={dish.id}   >
                        <img width={64} height={64} src={dish.image} alt="Generic placeholder" />
                        <Media.Body className="ml-3" >
                        <h5>{dish.name}</h5>
                        <p>{dish.description}</p>
                        </Media.Body>
                    </Media>
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
