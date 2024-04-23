import React, { useEffect, useState } from "react"
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { GetVans } from "../api";


export function loader() {
    return GetVans();
}


export default function Vans() {
    const [typeFilter, setTypeFilter] = useSearchParams();
    const [error, setError] = useState(null)
    const vansData = useLoaderData();

    const getFilterData = typeFilter.get("type");
    const toDisplay = !getFilterData ? vansData :
        vansData.filter(item => item.type.toLowerCase() === getFilterData);







    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }




    const elemArr = toDisplay.map((item, index) => {
        return (
            <div className="van-component" key={index}>
                <Link to={item.id} state={
                    {
                        search: `?${typeFilter.toString()}`,
                        type: getFilterData
                    }
                }>
                    <img src={item.imageUrl} alt="" />
                    <div className="bottom">
                        <div className="left">
                            <h1>{item.name}</h1>
                            <button>{item.type}</button>
                        </div>
                        <div className="right">
                            <p>${item.price}/day</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="Vans-container">
            <div className="filter-component">
                <h1>Explore our van options</h1>
                <div className="filters">
                    <button
                        onClick={() => setTypeFilter({ type: "simple" })}
                        className={`vn-t ${getFilterData === "simple" ? "selected" : ""}`}>Simple</button>
                    <button onClick={() => setTypeFilter({ type: "luxury" })} className={`vn-t ${getFilterData === "luxury" ? "selected" : ""}`}>Luxury</button>
                    <button onClick={() => setTypeFilter({ type: "rugged" })} className={`vn-t ${getFilterData === "rugged" ? "selected" : ""}`}>Rugged</button>
                    {getFilterData && <button onClick={() => setTypeFilter({})}>Clear Filter</button>}
                </div>
            </div>
            <div className="tili">
                {elemArr}
            </div>
        </div>
    )
}