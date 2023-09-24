import React from 'react'
import { ProductContext } from '../feed/shop/db/ProductContext'
import { useContext } from 'react'
import CartItems from './CartItems';
import { products } from '../feed/shop/db/products';



const Cart = () => {
  const { cart, clearCart, calculateTotal  } = useContext(ProductContext); 
  return (
    
    <div style={{marginTop: '40px'}}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
      <div>
        {cart.map((cartitem) => <CartItems key={cartitem.id} title={cartitem.title} img={cartitem.img} newPrice={cartitem.newPrice}  id={cartitem.id} quantity={cartitem.quantity}  /> )  }
      </div>)}
      {cart.length === 0 ? (
        <p></p>
      ) : (
        <div><button onClick={() => clearCart(products)}>Clear Cart</button>
        <div>
        <p>Total Amount: ${calculateTotal().toFixed(2)}</p>
      </div>
      </div> ) }
    </div>
  )
}

export default Cart