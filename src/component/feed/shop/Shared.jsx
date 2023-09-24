import React, { useContext } from 'react';
import { ProductContext } from './db/ProductContext';
import ShopFeed from './ShopFeed';
import './ShopFeed.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Shared = () => {
    const { filteredList, filterBySearchAdidas, filterBySearchAll, filterBySearchVans, filterBySearchPuma, filterBySearchNike } = useContext(ProductContext);
  return (
    <div className="product">
      <h1><b>SHOP BY BRANDS</b></h1>
      <ButtonToolbar style={{display: 'flex', gap:'20px'}}>
        <ButtonGroup >
      <Button variant='outline-primary' onClick={filterBySearchAll} >All</Button> </ButtonGroup>
      <ButtonGroup> <Button variant='outline-primary' onClick={filterBySearchAdidas}>Adidas</Button> </ButtonGroup>
      <ButtonGroup> <Button variant='outline-primary' onClick={filterBySearchNike}>Nike</Button> </ButtonGroup>
      <ButtonGroup> <Button variant='outline-primary' onClick={filterBySearchVans}>Vans</Button> </ButtonGroup>
      <ButtonGroup> <Button variant='outline-primary' onClick={filterBySearchPuma}>Puma</Button> </ButtonGroup>
    </ButtonToolbar>
    <div className="product-cards">
      {filteredList.map((product, index) => (<ShopFeed key={index} img={product.img} title={product.title} prevPrice={product.prevPrice} newPrice={product.newPrice} company={product.company} color={product.color} id={product.id}   />))}
      </div>
     </div>
  )
} 

export default Shared