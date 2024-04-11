import { Link } from "react-router-dom";
export default function Page404() {
    return (
        <div className="p404">
            <h1>Page not Found!!!</h1>
            <Link to={"/"}><button className="link-button">Return to Home</button></Link>
        </div>
    )
}