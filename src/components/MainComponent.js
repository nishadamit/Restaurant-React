import React, { Component } from 'react';
// import { Navbar,Container } from 'react-bootstrap';
import { Route,Switch,Redirect } from 'react-router-dom';

import  '../App.css'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import ContactUsComponent from './ContactUsComponent';

export class MainComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             dishes:DISHES,
             comments:COMMENTS,
             leaders:LEADERS,
             promotions:PROMOTIONS,
             selectedDish:null
        }
    }

    // onDishSelect = (dishId) => {
    //     console.log("DisHId",dishId)
    //     this.setState({selectedDish:dishId})
    // }
    
    render() {

        const HomePage = () =>{
            return <HomeComponent
                       dish={this.state.dishes.filter((dish) => dish.featured )[0]}
                       leader = {this.state.leaders.filter((leader) =>leader.featured)[0]}
                       promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
                    />
        }

        return (
            <div>
                <HeaderComponent/>
                 <Switch>
                     <Route path="/home" component={HomePage} />
                     <Route exact path="/menu" component={() => <MenuComponent dishes={this.state.dishes}/>}/> 
                     <Route exact path="/contactus" component={ContactUsComponent}/>
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