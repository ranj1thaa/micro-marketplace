import { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../utils/axios'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useAppContext } from '../../context/AppContext'
function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const {setUser} = useAppContext()
  
  useGSAP(()=>{
    gsap.from(".login-div",{
      y:-800,
      duration:1.6,
      opacity:0
    })
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !password)
      return toast.warn("Please enter email and password")

    try {
      const res = await api.post('/auth/login', { email, password })
      toast.success("Logged in Successfully")
      setUser(res.data.user)

      const { role } = res.data.user
      navigate('/product')
    } catch (err) {
      toast.error(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center section-padding " style={{ backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <div className="w-full max-w-md card px-6 py-8 sm:px-10 login-div">
        <div className="flex flex-col items-center mb-6">
          <h1 className="mt-3 text-xl font-semibold">Micro Market Place</h1>
          <p className="text-sm text-muted">Explore.....</p>
        </div>

        <h2 className="text-lg font-medium text-center mb-1">Welcome Back</h2>
        <p className="text-sm text-center text-muted mb-6">
          Login to continue...
        </p>

        <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"  placeholder="Enter your email" ref={emailRef} className="rounded-xl py-2"/>
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" ref={passwordRef} className="rounded-xl py-2" />
          </Form.Group>

          <button type="submit" className="w-full primary-btn btn-home">
            Log In
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?
            <Link to="/signup" className="underline">
              Register
            </Link>
          </p>
        </Form>
      </div>
    </div>
  )
}

export default Login