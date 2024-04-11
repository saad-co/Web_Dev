import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <header className="head">
            <Link to={"/"}><h1>#VANLIFE</h1></Link>
            <nav>
                <NavLink to={"host"} style={({ isActive }) => isActive ? activeStyle : null}>Host</NavLink>
                <NavLink to={"about"} style={({ isActive }) => isActive ? activeStyle : null}>About</NavLink>
                <NavLink to={"vans"} style={({ isActive }) => isActive ? activeStyle : null}>Vans</NavLink>
                <Link to={"login"}>
                    <CgProfile />
                </Link>
            </nav>
        </header>
    )
}