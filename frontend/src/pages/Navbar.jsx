import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import '../styles/navbar.css';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
const Navbar = () => {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  useGSAP(()=>{
    gsap.from('.navbar-brand',{
      x:'-700px',
      duration:6,
      yoyo:true,
      delay:2
    })
    gsap.to('.navbar-brand',{
      x:'400px',
      duration:6,
      yoyo:true,
    })
  },[])
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed");
    }
  };

  const handleFavorites = () => {
    if (!user) {
      toast.warn("Please login to see favorites");
      return;
    }
    navigate("/favorites"); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-brand">Micro Marketplace</h2>
      </div>
      <div className="navbar-right">
        {user && (
          <>
            <Button variant="outline-primary" className="me-2" onClick={handleFavorites}>
              Your Favorites ({user.favorites?.length || 0})
            </Button>
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
          </>
        )}
        {!user && (
          <Link to="/" className="btn btn-primary">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
