import React from 'react'
import { useParams } from 'react-router-dom';
import '../Feed.css'
import { products } from './db/products';



const ProductDetails = () => {

    const { title } = useParams();
    const productName = decodeURIComponent(title);
    const product = products.find((p) => p.title === productName);

    if (!product) {
        return <div> Product Not Found</div>
    }
  return (
    <div className='product-details' style={{marginTop: '50px'}}>
        <div class="card mb-3" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={product.img} class="img-fluid rounded-start" alt={product.title} />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">${product.newPrice}</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductDetails