import {Link} from "react-router-dom";
export default function Header() {
    return (
        <header className="head">
            <Link to={"/"}><h1>#VANLIFE</h1></Link>
            <nav>
                <Link to={"/about"}>About</Link>
                <Link to={"/vans"}>Vans</Link>
            </nav>
        </header>
    )
}