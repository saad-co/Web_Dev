import { useParams } from "react-router-dom";
import "./server";
import { useEffect, useState } from "react";
export default function VanTile() {
    const param = useParams();
    const [van, setVan] = useState({});

    useEffect(() => {
        async function getData() {
            const res = await fetch(`/api/vans/${param.id}`);
            const data = await res.json();
            setVan(data.vans);
        }
        getData();
    }, [param.id])

    const elem = (
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    )


    return (
        { van? elem : <h2>Loading...</h2> }
    )
}