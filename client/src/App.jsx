import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ProductDashboard from './pages/product/ProductDashboard';
import EditProduct from './pages/product/EditProduct';
import ProtectedRoute from './pages/Protected/ProtectedRoute';
import Favorites from './pages/Favorites';
import ProductDetails from './pages/product/ProductDetails';
import NewProduct from './pages/product/NewProduct';
const App = () => {
  return (
    <div className='bodyy'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/product' element={<ProtectedRoute><ProductDashboard/></ProtectedRoute>}/>
          <Route path="/edit_product/:id" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
           <Route path="/favorites" element={<ProtectedRoute><Favorites/></ProtectedRoute>} /> 
          <Route path="/product/:id" element={<ProtectedRoute><ProductDetails/></ProtectedRoute>} />
          <Route path="/new_product" element={<ProtectedRoute><NewProduct/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
