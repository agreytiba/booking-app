import "./navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
const Navbar = () => {

  //  using context api to accessing user content
  const { user } = useContext(AuthContext)
  
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
          <span className="logo">Bookingapp</span>
        </Link>
        {/* checking for user condition */}
        { user? user.username :(
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
          </div>)
        }
      </div>
    </div>
  )
}

export default Navbar