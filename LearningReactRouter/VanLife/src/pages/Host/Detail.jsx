import { useOutletContext } from "react-router-dom";
export default function Detail() {
    const { data } = useOutletContext();
    console.log(data);
    return (
        <section>
            <h4>Name: {data.name}</h4>
            <h4>Category: {data.type}</h4>
            <h4>Description: {data.description}</h4>
            <h4>Visibility: public</h4>
        </section>
    )
}