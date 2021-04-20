import React, { Component } from 'react';
import {Card, ListGroup, ListGroupItem,Button} from 'react-bootstrap';
import './Product.css';
import formatCurrency from '../../Currency';
import Modal from 'react-modal';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Zoom from 'react-reveal/Zoom';


export class ProductView extends Component {
    constructor(){
        super();
        this.state = {
            product: null
        }
    }

    openModal=(product)=>{
        this.setState({product});

    }

    closeModal=()=>{
        this.setState({product: null});
    }

    render() {
        const {product} = this.state;
        return (
            <div className='product-container'>
                {this.props.products.map(product=>(
                    <Card className='product-card'>
                    <Card.Img onClick={()=>this.openModal(product)} variant="top" className='product-image' src={product.Image}/>
                    <Card.Body>
                      <Card.Title>{product.Title}</Card.Title>
                    </Card.Body>
                    <ListGroup className='product-info'>
                      <ListGroupItem className='product-price'>{formatCurrency(product.Price)}</ListGroupItem>
                      {(product.CountInStock < 1 ) ?
                      (<ListGroupItem><span className='outof-stock'>Out Of Stock</span></ListGroupItem>):
                      (<ListGroupItem><span className='in-stock'>In Stock</span></ListGroupItem>)}
                      <ListGroupItem className='product-moreinfo'>
                          <button onClick={()=>this.openModal(product)} className='moreinfo-btn'>
                              More Info</button></ListGroupItem>
                    </ListGroup>
                  </Card>
                ))}

                {
                    product && (
                        <Zoom>
                            <Modal isOpen={true} onRequestClose={this.closeModal} scrollable={true}>
                            <button className='closemodal-btn' onClick={this.closeModal}><AiOutlineCloseCircle/></button>

                        <div className='modal-container'>
                            <div className='image-container'>
                                <img className='product-modal-img' src={product.Image} />
                            </div>
                            <div className='product-modal-info'>
                                <div className='product-modal-title'>{product.Title}</div>
                                <div className='product-modal-price'>{formatCurrency(product.Price)}</div>
                                <div className='product-modal-desc'>{product.Description}</div>
                            </div>

                            <div className='product-modal-options'>
                                <div className='product-option-price'>{formatCurrency(product.Price)}</div>
                                <div>{(product.CountInStock < 1) ?
                                 (<span className='product-option-outof-stock'>Out Of Stock</span>) :
                                  (<span className='product-option-in-stock'>In Stock</span>)}</div>
                                <div className='atc-container'><button onClick={()=> this.props.addToCart(product)} className='addtocart-btn'>Add To Cart</button></div>
                            </div>

                        </div>


                        </Modal>
                        </Zoom>
                    )
                }


            </div>

            
        )
    }
}

export default ProductView;
