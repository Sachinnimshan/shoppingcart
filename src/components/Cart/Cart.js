import React, { Component } from 'react';
import './Cart.css';
import formatCurrency from '../../Currency';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {Badge} from '@material-ui/core';

export class Cart extends Component {
    render() {
        const {cartItems}  = this.props;
        return (
            <div className='cart-container'>
                
                <div className='cart-title'>
                {(cartItems.length === 0) ?
                 (<span>Your Cart is Empty</span>): 
                 (<span>You Have {cartItems.length} Item(s) in the Cart</span>)}
                </div>
                <div className='sub-total-container'>
                    <span>Sub Total : {" "}{formatCurrency(cartItems.reduce((a,c)=> a+ c.Price * c.count,0))}</span>
                </div>
                <div className='view-cart-btn-container'><button className='view-cart-btn'>View Cart</button></div>
                <div className='cart'>
                  {cartItems.map((item)=>(
                      <Card key={item._id} className='cart-list-item'>
                             <div className='remove-cart-btn'>
                                 <AiOutlineCloseCircle onClick={()=> this.props.removeFromCart(item)}/>
                             </div>
                            <Card.Img className='cart-item-image' src={item.Image}/>
                            <Card.Body>
                              <Card.Title className='cart-item-title'>{item.Title}</Card.Title>
                           </Card.Body>
                           <ListGroup>
                               <ListGroupItem className='cart-item-price'>{formatCurrency(item.Price)}{" "}X{" "}{item.count}</ListGroupItem>
                        </ListGroup>
                        </Card>
                        
                    ))}
                </div>
            </div>
        )
    }
}

export default Cart;
