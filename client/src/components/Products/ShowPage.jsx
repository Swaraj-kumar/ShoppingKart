import React, { useEffect, useState } from 'react';
import Product from './Product'; // Ensure the correct path to the Product component
import { getProducts } from '../../services/productService'; // Ensure the correct path to productService
import './ShowPage.css'; // CSS file for styling

const ShowPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="shop-now-page">
      <h2>Phones & Accessories</h2>
      <div className="product-grid">
        
        {products.map((product) => (
          <Product
            key={product._id}
            id={product._id} // Ensure `id` is passed
            imageSrc={product.imageUrl}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowPage;
