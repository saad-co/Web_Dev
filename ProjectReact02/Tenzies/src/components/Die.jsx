export default function Die(props) {
    return (
        <div className={props.status ? "Die-held" : "Die"} onClick={props.holding}>
            <p>{props.value}</p>
        </div>
    );
}