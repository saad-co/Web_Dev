import { useOutletContext } from "react-router-dom";

export default function Reviews() {
    const {data} = useOutletContext();
    return (
        <h1>Thi is the Review Page</h1>
    )
}