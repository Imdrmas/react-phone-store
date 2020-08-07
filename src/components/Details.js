import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonConatianer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
               {(value) => {
                  const {id, company, img, info, price, title, inCart} = value.detailProduct;
                  return (
                      <div className="container py-5">
                         <div className="col-10 mx-auto text-center text-stanted text-blue my-5">
                           <h1>{title}</h1>
                         </div>
                         <div className="row">
                             <div className="col-10 mw-auto col-md-6 my-3 text-capitalize">
                                   <img src={require(`${img}`)} className="img-fluid" alt="Product" />
                             </div>
                             <div className="col-10 mw-auto col-md-6 my-3 text-capitalize">
                                 <h2>Model: {title}</h2>
                                 <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                   Made by: <span className="text-uppercase">{company}</span>
                                 </h4>
                                 <h4 className="text-blue">
                                   <strong>Price: <span>$</span>{price}</strong>
                                 </h4>
                                 <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                   Some info about product
                                 </p>
                                 <p className="text-muted lead">{info}</p>
                                 <div>
                                     <Link to="/">
                                         <ButtonConatianer>Bac to products</ButtonConatianer>
                                     </Link>
                                     <ButtonConatianer cart disabled={inCart?true:false} onClick={()=> {
                                         value.addToCart(id);
                                         value.openModal(id);
                                     }}>
                                         {inCart?'inCart':'Add to cart'}
                                     </ButtonConatianer>
                                 </div>
                            </div>
                         </div>
                      </div>
                  )
               }}
            </ProductConsumer>
        )
    }
}
