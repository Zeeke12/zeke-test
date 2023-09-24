import React from 'react';
import { useContext } from 'react';
import { ProductContext } from './db/ProductContext';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'


const ShopFeed = ({ title, img, prevPrice, newPrice, company, color, id }) => {
  

  
  const { addToCart, cart} = useContext(ProductContext);
  const navigate = useNavigate()

  return (
    <Card class="card" style={{width: "20rem", marginBottom: '30px'}} >
    <Card.Img variant="top" src={img}  alt={title} />
    <Card.Body>
    <Card.Title >{title}</Card.Title>
    <Card.Text><del>{prevPrice}</del> {newPrice}</Card.Text>
    <Card.Text class="card-text">{color}</Card.Text>
    <button className="btn btn-primary px-4 mx-1" onClick={() => navigate(`/products/${encodeURIComponent(title)}`)} >Buy Now</button>
    <button className="btn btn-primary px-4"  onClick={() => addToCart({title, img, prevPrice, newPrice, color, id})}>
                Add To Cart {cart.find((item) => item.id === id) && (
              <span style={{backgroundColor: 'blue'}}>{cart.find((item) => item.id === id).quantity}</span>
            )}
            </button>
            
  </Card.Body>
</Card>
  )
}

export default ShopFeed