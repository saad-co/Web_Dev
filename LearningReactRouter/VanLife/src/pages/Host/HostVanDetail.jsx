import { Link, useParams, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { GetHostVans } from "../../api";
import "../server"
import { requireAuth } from "../../utils";


export async function loader({ params }) {
    await requireAuth();
    return GetHostVans(params.id);
}

export default function HostVanDetail() {
    const data = useLoaderData();

    const objStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    return (
        <section className="blah">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={data.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${data.type}`}
                        >
                            {data.type}
                        </i>
                        <h3>{data.name}</h3>
                        <h4>${data.price}/day</h4>
                    </div>
                </div>
                <nav className="tma">
                    <NavLink to={"."} end style={({ isActive }) => isActive ? objStyle : {}}>Detail</NavLink>
                    <NavLink to={"pricing"} style={({ isActive }) => isActive ? objStyle : {}}>Pricing</NavLink>
                    <NavLink to={"photos"} style={({ isActive }) => isActive ? objStyle : {}}>Photos</NavLink>
                </nav>
                <Outlet context={{ data }} />
            </div>
        </section>
    )
}