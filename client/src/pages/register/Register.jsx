import axios from "axios"
import { useContext,useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import "./register.css"

function Register() {



  // // useState to handle credential  from user ui
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password:undefined,
  // })

  // using authcontext  to fetch the user info and state
  const {user, loading, error, dispatch } = useContext(AuthContext);

  
  // // handle submitation of  password and username
  // const handleClick =async e => {
  //   e.preventDefault()
  //   dispatch({type:"LOGIN_START"})
  //   try {
  //     const res = await axios.post("/auth/login", credentials);
  //     dispatch({type:"LOGIN_SUCCESS", payload: res.data})
  //   } catch (err) {
  //     dispatch({type:"LOGIN_FAILURE" , payload:err.response.data})
  //   }
  // }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  

  const onChange =  (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    if (password !== password2) {
      console.log("password don't match");
    }
    
    else {
        
     e.preventDefault()
    dispatch({type:"REGISTER_START"})
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      dispatch({type:"REGISTER_SUCCESS", payload: res.data})
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data })
      console.log("form submitted");
    }
   
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
        <form>
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
            <button type='submit' className='btn btn-block' onClick={handleClick}>
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