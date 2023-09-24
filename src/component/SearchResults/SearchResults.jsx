import React, { useContext } from 'react';
import { ProductContext } from '../feed/shop/db/ProductContext';
import Results from './Results';

function SearchResults() {
    const { result } = useContext(ProductContext)

  return (
    <div>
      {result.map((product) => (<Results key={product.id} title={product.title} img={product.img} newPrice={product.newPrice} />))}
    </div>
  );
}

export default SearchResults;