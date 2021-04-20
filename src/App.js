
import React, { Component } from 'react';
import Data from './Data';
import './App.css';
import Products from './components/Products/Products';
import Header from './components/header/Header';
import FilterProduct from './components/Products/FilterProduct';
import Cart from './components/Cart/Cart';
import { notifier } from './util/notifications';

export class App extends Component {
  constructor(){
    super();
      this.state ={
        products: Data.phoneData,
        cartItems:[],
        sort: ''
      }
    
  }

  addToCart=(product)=>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item)=>{
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
  }

  removeFromCart=(product)=>{
    const cartItems = this.state.cartItems.slice();
    this.setState({cartItems: cartItems.filter((x)=> x._id !== product._id),});
  }

  sortproducts=(e)=>{
    const sort = e.target.value;
    this.setState((state)=>({
      sort: sort,
      products: this.state.products.slice().sort((a,b)=>
        sort === 'lowest' ?
        a.Price < b.Price ? 1 : -1
        :
        sort === 'highest' ?
        a.Price > b.Price ? 1 : -1
        :
        a._id > b._id
        ? 1 : -1
      ),
    }));

  };

  render() {
    return (
      <div>
        <Header/>
        <FilterProduct sort ={this.state.sort}
        sortproducts={this.sortproducts}/>
        <div className='product-view-container'>
        <Products products={this.state.products}
        addToCart={this.addToCart}/>
        <Cart cartItems ={this.state.cartItems}
        removeFromCart = {this.removeFromCart}/>
        </div>
      </div>
    )
  }
}

export default App;

