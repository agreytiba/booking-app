import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import "./register.css"

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      console.log("password don't match");
    } else {
        
    console.log("form submitted");
   
      }
      setFormData({
          name: '',
    email: '',
    password: '',
    password2: '',
  })
  }

 
  return (
      <>
    <div className='register'>
    <div className='form-container'>
      <section className='heading'>
        <h1>
        Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
     </section>
    </div>
    <p className='para-account'>Already have account <Link to="/login" style={{color:"goldenrod",textDecoration:"none"}}>Login</Link></p>     
     <Link to="/"className="btn-link"><button><AiFillHome className="backHome"/>home page</button></Link>

    </div>
    </>
  )
}

export default Register