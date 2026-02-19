import { useEffect, useState } from "react";
import api from "../utils/axios"
import ProductFace from "./product/ProductFace"
import { useAppContext } from "../context/AppContext"
import '../styles/productDashboard.css';

const Favorites = () => {
  const { user } = useAppContext();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      if (!user) return;
      
      const res = await api.get("/product"); 
      const favProducts = res.data.products.filter(
        prod => user?.favorites?.includes(prod._id)
      );

      setFavorites(favProducts);
    } catch (err) {
      console.error(err);
      setFavorites([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  if (loading) return <p>Loading favorites...</p>;

  return (
    <div className="product-grid-page">
      {favorites.length === 0 ? (
        <p>You have no favorite products.</p>
      ) : (
        <div className="product-cards-container">
          {favorites.map(product => (
            <ProductFace key={product._id} post={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
