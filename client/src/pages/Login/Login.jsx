import axios from "axios"
import { useContext,useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import "./login.css"


const Login = () => {

  // useState to handle credential  from user ui
  const [credentials, setCredentials] = useState({
    username: undefined,
    password:undefined,
  })

  // using authcontext  to fetch the user info and state
  const {user, loading, error, dispatch } = useContext(AuthContext);

  // onchange the input  by using id
  const handleChange = e => {
    setCredentials(prev =>({ ...prev, [e.target.id]: e.target.value}))
  }

  // handle submitation of  password and username
  const handleClick =async e => {
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE" , payload:err.response.data})
    }
  }
  

  return (
    <div className="login">
      <div className="form-control">
        <h3 className="login-title">Login</h3>
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="login-input" />
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="login-input" />
        
        <button className="login-button" onClick={handleClick}>Login</button>
        {error && <span className="error">{error.message}</span>}
      </div>
      <p className='para-account'>you don't have  an account <Link to="/register" style={{color:"goldenrod",textDecoration:"none"}}>register</Link></p>     
      <Link to="/"className="btn-link"><button><AiFillHome className="backHome"/>home page</button></Link>
    </div>
  )
}

export default Login