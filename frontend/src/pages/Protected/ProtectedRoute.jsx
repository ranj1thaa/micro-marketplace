import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Navbar from '../Navbar';
import Spinner from 'react-bootstrap/Spinner';
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAppContext();

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status" variant="primary" />
        <span className="spinner-text">Loading ...</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
    <Navbar/>{children}
    </>
  )
  ;
};

export default ProtectedRoute;