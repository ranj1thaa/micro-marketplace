import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import api from "../../utils/axios";
import '../../styles/productFace.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/product/${id}`);
        setProduct(res.data);
      } catch (err) {
        toast.error("Failed to fetch product");
        navigate("/product"); 
      }
    };
    fetchProduct();
  }, [id, navigate]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-5 detial">
      <h2>{product.title}</h2>
      {product.image && (
        <img
          src={product.image || "/download.jpeg"}
          alt={product.title}
          style={{ maxWidth: "400px" }}
          className="imgs"
        />
      )}
      <p className="desc">{product.description}</p>
      <p className="pri"><strong>Price: </strong>${product.price}</p>
      <Button onClick={() => navigate("/product")}>Back to Products</Button>
    </div>
  );
};

export default ProductDetails;
