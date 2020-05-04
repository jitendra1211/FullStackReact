import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetailed from './DishDetailedComponent';

class Main extends Component{
  constructor(props){
      super(props);
      this.state={
        dishes: DISHES
      };
     
  }
  render(){
    // console.log(this.state.dishes.filter((dish)=>dish.Id===this.selectedDish));
    const Homepage= () =>{
        return(
            <Home/>
        );
    }
  return (
    <div>
        <Header/>
        <Switch>
            <Route path="/home" component={Homepage}/>
            <Route path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
            <Redirect to="/home" />
        </Switch>
        <Footer/>
    </div>
  );}
}

export default Main;
