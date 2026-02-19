
import { useState } from "react"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../utils/axios"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useAppContext } from "../../context/AppContext"
const Signup = () => {
  const navigate = useNavigate()
  const { setUser } = useAppContext()
  useGSAP(()=>{
    gsap.from(".login-div",{
      y:-800,
      duration:1.6,
      opacity:0
    })
  })

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault()

    if (!form.email || !form.password)
      return toast.warn("Please enter email and password")

    if (form.password !== form.confirmPassword)
      return toast.warn("Passwords do not match")

    try {
      const res = await api.post('/auth/signup', {
        name: form.name,
        email: form.email,
        password: form.password,
      })

      toast.success("Signup successful")
      setUser(res.data.user)
      navigate('/product')
    } catch(err) {
      toast.error(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center section-padding" style={{backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="w-full max-w-xl card px-6 py-8 sm:px-10 login-div">

        <h2 className="text-2xl font-semibold text-center mb-2">
          Create Account
        </h2>

        <p className="text-sm text-center text-muted mb-6">
          Join Micro Market place....
        </p>

        <Form onSubmit={handleSignupSubmit}>
          <Row className="g-3">
            <Col xs={12}>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={handleChange} className="rounded-xl py-2"/>
            </Col>

            <Col xs={12}>
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={form.email} onChange={handleChange} className="rounded-xl py-2"/>
            </Col>

            <Col xs={12}>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password"  value={form.password} onChange={handleChange} className="rounded-xl py-2"/>
            </Col>

            <Col xs={12}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} className="rounded-xl py-2" />
            </Col>
          </Row>

          <button type="submit" className="w-full primary-btn mt-5 btn-home">
            Sign Up
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?
            <Link to="/" className="underline">
              Log In
            </Link>
          </p>
        </Form>
      </div>
    </div>
  )
}

export default Signup

