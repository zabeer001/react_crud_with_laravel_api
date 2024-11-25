import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for making API requests

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to store the products

  useEffect(() => {
    // This will run when the component mounts
    axios.get('http://127.0.0.1:8000/api/products')  // Replace with your actual API URL
      .then((response) => {
        console.log(response.data); // Log the entire data from the API
        if (response.data.success) {
          setProducts(response.data.data); // Set the products data into state
        } else {
          console.error("Failed to fetch products: ", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty array means this effect runs only once when the component mounts

  return (
    <div>
      <h1>Product List</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Updated At:</strong> {product.updated_at}</p>
            <p><strong>Created At:</strong> {product.created_at}</p>
            <p><strong>ID:</strong> {product.id}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductList;
