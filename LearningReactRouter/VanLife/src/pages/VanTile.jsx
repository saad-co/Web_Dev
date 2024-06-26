import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetVans } from "../api";


export function loader({ params }) {
    return GetVans(params.id);
}


export default function VanTile() {
    const location = useLocation();


    const van = useLoaderData();

    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return (
        <div className="van-detail-container">
            (
            <div className="wilu">
                <Link to={`..${search}`} relative="path" >←Back to {type} vans</Link>
                <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            </div>
            )
        </div>
    );
}