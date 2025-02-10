import React from 'react'

function MainSlide() {
  return (
    <div>
      <h1>Women's Shopping Page</h1>
      <div className="product-card">
        <h2>Women Shoes</h2>
        <button>Add to Cart</button>
      </div>
      <div className="product-card">
        <h2>Women Glasses</h2>
        <button>Add to Cart</button>
      </div>
      <div className="product-card">
        <h2>Women Clothes</h2>
        <button>Add to Cart</button>
      </div>
      {/* Add more product cards as needed */}
    </div>
  )
}

export default MainSlide
