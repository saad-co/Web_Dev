import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Vans() {
    const [vansData, setVansData] = useState([]);
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
            .catch(err => console.log("err fetching data: " + err));
    }, [])

    const elemArr = vansData.map((item, index) => {
        return (
            <div className="van-component" key={index}>
                <Link to={`/vans/${item.id}`}>
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
                    <button>Simple</button>
                    <button>Luxury</button>
                    <button>Rugged</button>
                    <p>Clear Filter</p>
                </div>
            </div>
            <div className="tili">
                {elemArr}
            </div>
        </div>
    )
}