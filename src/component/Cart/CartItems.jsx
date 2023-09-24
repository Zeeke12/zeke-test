import React from 'react'
import { ProductContext } from '../feed/shop/db/ProductContext';
import { useContext } from 'react';

const CartItems = ({ title, img, newPrice, id, quantity}) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity, updateCart } = useContext(ProductContext); 

  return (
    <div className="card mb-3" style={{maxWidth: '30rem}'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${newPrice}</p>
        <div className="input-group">
  <button className="btn btn-outline-secondary" type="button" onClick={() => decreaseQuantity(id)}  >-</button>
  <input className="form-control bg-red-600" type='number' min='1' value={quantity} onChange={(e) => updateCart(id, parseInt(e.target.value, 10))} />
  <button className="btn btn-outline-secondary" type="button" onClick={() => increaseQuantity(id)}  >+</button>
</div>
<div>
  <button className="btn btn-primary px-4 my-4" onClick={() => removeFromCart(id)}>Remove</button>
</div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default CartItems