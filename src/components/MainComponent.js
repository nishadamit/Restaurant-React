import React, { Component } from 'react';
import { Navbar,Container } from 'react-bootstrap';

import { DISHES } from '../shared/dishes';
import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';

export class MainComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             dishes:DISHES,
             selectedDish:null
        }
    }

    onDishSelect = (dishId) => {
        console.log("DisHId",dishId)
        this.setState({selectedDish:dishId})
    }
    
    render() {
        return (
            <div>
                <Navbar bg="primary">
                    <Container>
                        <Navbar.Brand>BuzzTime</Navbar.Brand>
                    </Container>
                </Navbar>
                <MenuComponent 
                    dishes = {this.state.dishes} 
                    DishSelect ={(dishId) => this.onDishSelect(dishId)}
                />
                <DishDetailComponent 
                 dish={this.state.dishes.filter((dish)=>dish.id == this.state.selectedDish)[0]} 
                />
           </div>
        )
    }
}

export default MainComponent