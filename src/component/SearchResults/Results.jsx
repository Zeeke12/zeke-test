import React from 'react'

const Results = ({ title, img, newPrice }) => {
  return (
    <div class="card mb-3" style={{maxWidth: '10rem}'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">${newPrice}</p>
        

      </div>
    </div>
  </div>
  </div>
  )
}

export default Results