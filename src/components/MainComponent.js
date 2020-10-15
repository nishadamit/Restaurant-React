import React, { Component } from 'react';
// import { Navbar,Container } from 'react-bootstrap';
import { Route,Switch,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import  '../App.css'
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
    
    }
    
    render() {

        const DishWithId = ({match}) =>{
            // console.log("props",match.params.dishId)
            return(
                <DishDetailComponent 
                  dish={this.props.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId,10))[0]}
                  comments = {this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
                  />
            )
          }

        const HomePage = () =>{
            return <HomeComponent
                       dish={this.props.dishes.filter((dish) => dish.featured )[0]}
                       leader = {this.props.leaders.filter((leader) =>leader.featured)[0]}
                       promotion={this.props.promotions.filter((promotion)=>promotion.featured)[0]}
                    />
        }

        return (
            <div>
                <HeaderComponent/>
                 <Switch>
                     <Route path="/home" component={HomePage} />
                     <Route exact path="/menu" component={() => <MenuComponent dishes={this.props.dishes}/>}/> 
                     <Route path="/menu/:dishId" component={DishWithId}/>
                     <Route exact path="/contactus" component={ContactUsComponent}/>
                     <Route exact path="/aboutus" component={() =><AboutUs leaders={this.props.leaders} />} />
                     <Redirect to="/home" />
                 </Switch>
                <FooterComponent />
           </div>
        )
    }
}

const mapStateToProps = state => {

    return{
         dishes:state.dishes,
         comments:state.comments,
         leaders:state.leaders,
         promotions:state.promotions
    }
 
 }

export default connect(mapStateToProps)(MainComponent)

