import React, { Component } from 'react';
// import { Navbar,Container } from 'react-bootstrap';
import { Route,Switch,Redirect } from 'react-router-dom';

import  '../App.css'
import { DISHES } from '../shared/dishes';
import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';

export class MainComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             dishes:DISHES,
             selectedDish:null
        }
    }

    // onDishSelect = (dishId) => {
    //     console.log("DisHId",dishId)
    //     this.setState({selectedDish:dishId})
    // }
    
    render() {

        const HomePage = () =>{
            return <HomeComponent/>
        }

        return (
            <div>
                <HeaderComponent/>
                 <Switch>
                     <Route path="/home" component={HomePage} />
                     <Route exact path="/menu" component={() => <MenuComponent dishes={this.state.dishes}/>}/> 
                     <Redirect to="/home" />
                 </Switch>
                <FooterComponent />
           </div>
        )
    }
}

export default MainComponent

{/* <MenuComponent 
dishes = {this.state.dishes} 
DishSelect ={(dishId) => this.onDishSelect(dishId)}
/>
<DishDetailComponent 
dish={this.state.dishes.filter((dish)=>dish.id == this.state.selectedDish)[0]} 
/> */}