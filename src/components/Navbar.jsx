import { NavLink } from "react-router-dom"
import './Style.css'
const Navbar = () => {
    return (
        <div>
            <ul className="nav">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/student"}>Student</NavLink></li>
                <li><NavLink to={"/contactus"}>Contact us</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar