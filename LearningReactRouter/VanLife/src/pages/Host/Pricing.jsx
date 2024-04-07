import { useOutletContext } from "react-router-dom";

export default function Pricing() {
    const { data } = useOutletContext();
    return (
        <h3 className="host-van-price">${data.price}<span>/day</span></h3>
    )
}