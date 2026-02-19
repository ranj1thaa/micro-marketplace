import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import api from "../../utils/axios";
import { toast } from "react-toastify";
import '../../styles/productFace.css'
import Button from "react-bootstrap/Button";

const ProductFace = ({ post }) => {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();

  const handleFavorite = async () => {
    try {
      const res = await api.post(`/product/${post._id}/favorite`);
      toast.success(res.data.message);

      setUser(prev => ({ ...prev, favorites: res.data.favorites }));
    } catch (err) {
      console.error(err);
      toast.error("Login required");
    }
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${post._id}`)} style={{ cursor: "pointer" }}>
      <div className="product-card-title">{post.title}</div>
      {post.image && (
        <img src={post.image || "/download.jpeg"} alt={post.title} />
      )}
      <div className="product-card-text">{post.description}</div>
      <div className="product-card-text">Price: ${post.price}</div>

      <div className="product-card-buttons" onClick={e => e.stopPropagation()}>
        <Button onClick={() => navigate(`/edit_product/${post._id}`)}>Edit</Button>
        <Button variant={user?.favorites?.includes(post._id) ? "warning" : "outline-warning"} size="sm" onClick={handleFavorite}>
          {user?.favorites?.includes(post._id) ? "★ Favorited" : "☆ Favorite"}
        </Button>
      </div>
    </div>
  );
};

export default ProductFace;
