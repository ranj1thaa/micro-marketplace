import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import api from '../../utils/axios';
import { useAppContext } from '../../context/AppContext';
import ProductFace from './ProductFace';
import '../../styles/productDashboard.css';

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); 
  const { user } = useAppContext();
  const navigate = useNavigate();

  const fetchProducts = async (query = "") => {
    try {
      const res = await api.get(`/product?search=${query}`);
      setProducts(Array.isArray(res.data.products) ? res.data.products : []);
    } catch (err) {
      console.error(err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = () => {
    setLoading(true);
    fetchProducts(search);
  };

  return (
    <div className="product-grid-page">
      <div className="product-grid-buttons mb-3">
        <input type="text" placeholder="Search products..." value={search} style={{border:'0.1px solid black', borderRadius:'20px', padding:'10px', paddingLeft:'50px', paddingRight:'70px'}}  onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()}/>

        <Button onClick={handleSearch} className="ms-2">Search</Button>
        <Button onClick={() => navigate("/new_product")} className="ms-2">Add Product</Button>
      </div>

      {!loading && products.length === 0 && <p>No products found.</p>}

      <div className="product-cards-container">
        {products.map(post => (
          <ProductFace
            key={post._id}
            post={post}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
