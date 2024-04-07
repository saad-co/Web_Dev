import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../server"

export default function HostVanDetail() {
    const param = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        async function getData() {
            const res = await fetch(`/api/host/vans/${param.id}`)
            const data1 = await res.json();
            setData(data1.vans[0]);
        }

        getData();
    }, [param.id])

    if (!data) {
        return <h1>Loading...</h1>
    }

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
                <Outlet context={{data}} />
            </div>
        </section>
    )
}