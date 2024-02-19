import React, { useState } from 'react';
import './App.css';

function App() {
  // Sample food products data with image URLs
  const [products] = useState([
    { id: 1, name: 'Pizza', price: 10, image: 'https://ik.imagekit.io/mtbv505oky/pizza.jpg?updatedAt=1708180038021' },
    { id: 2, name: 'Burger', price: 8, image: 'https://ik.imagekit.io/mtbv505oky/burger.jpg?updatedAt=1708180037835' },
    { id: 3, name: 'Salad', price: 6, image: 'https://ik.imagekit.io/mtbv505oky/salad.jpg?updatedAt=1708180037955' },
    { id: 4, name: 'Pasta', price: 12, image: 'https://ik.imagekit.io/mtbv505oky/pasta.jpg?updatedAt=1708180037949' },
    { id: 5, name: 'Sushi', price: 15, image: 'https://ik.imagekit.io/mtbv505oky/sushi.jpg?updatedAt=1708180037939' },
    { id: 6, name: 'Steak', price: 20, image: 'https://ik.imagekit.io/mtbv505oky/steak.jpg?updatedAt=1708180037900' },
    { id: 7, name: 'Sandwich', price: 7, image: 'https://ik.imagekit.io/mtbv505oky/sandwich.jpg?updatedAt=1708180037827' },
    { id: 8, name: 'Soup', price: 5, image: 'https://ik.imagekit.io/mtbv505oky/soup.jpg?updatedAt=1708180037832' },
    { id: 9, name: 'Tacos', price: 9, image: 'https://ik.imagekit.io/mtbv505oky/tacos.jpg?updatedAt=1708180038025' },
    { id: 10, name: 'Fried Chicken', price: 8, image: 'https://ik.imagekit.io/mtbv505oky/chcikem.jpg?updatedAt=1708180037944' },
    // Add more products as needed
  ]);

  const addToCart = (product) => {
    // Add your logic to add the product to the shopping cart
    console.log(`Added ${product.name} to cart!`);
  };

  return (
    <div className="App">
      <h1>Food Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
