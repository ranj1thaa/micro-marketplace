import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import api from "../../utils/axios";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import "../../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { user, setUser } = useAppContext();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/product/${id}`);
      setProduct(res.data);
    } catch (err) {
      toast.error("Failed to fetch product");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleFavorite = async () => {
    try {
      const res = await api.post(`/product/${id}/favorite`);
      toast.success(res.data.message);
      setUser(prev => ({ ...prev, favorites: res.data.favorites }));
    } catch (err) {
      toast.error("Login required");
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-5 heyy">
      <h2>{product.title}</h2>

      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", borderRadius: "10px" }}
          className="imgg"
        />
      )}

      <p className="mt-3 desc">{product.description}</p>
      <h4>Price: ${product.price}</h4>

      <Button
        variant={user?.favorites?.includes(product._id) ? "warning" : "outline-warning"}
        onClick={handleFavorite}
      >
        {user?.favorites?.includes(product._id) ? "★ Favorited" : "☆ Favorite"}
      </Button>
    </div>
  );
};

export default ProductDetails;
