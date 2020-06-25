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
import AboutUs from './AboutUs';

export class MainComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             dishes:DISHES,
             comments:COMMENTS,
             leaders:LEADERS,
             promotions:PROMOTIONS
        }
    }


    
    render() {

        const DishWithId = ({match}) =>{
            // console.log("props",match.params.dishId)
            return(
                <DishDetailComponent 
                  dish={this.state.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId,10))[0]}
                  comments = {this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
                  />
            )
          }

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
                     <Route path="/menu/:dishId" component={DishWithId}/>
                     <Route exact path="/contactus" component={ContactUsComponent}/>
                     <Route exact path="/aboutus" component={() =><AboutUs leaders={this.state.leaders} />} />
                     <Redirect to="/home" />
                 </Switch>
                <FooterComponent />
           </div>
        )
    }
}

export default MainComponent

