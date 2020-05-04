import React, { Component } from 'react';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetailed from './DishDetailedComponent';

class Main extends Component{
  constructor(props){
      super(props);
      this.state={
        dishes: DISHES,
        selectedDish : null
      };
     
  }
  onDishSelected(dishId){
    this.setState({selectedDish : dishId});
}
  render(){
    // console.log(this.state.dishes.filter((dish)=>dish.Id===this.selectedDish));
  return (
    <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelected(dishId)}/>
        <DishDetailed dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer/>
    </div>
  );}
}

export default Main;
