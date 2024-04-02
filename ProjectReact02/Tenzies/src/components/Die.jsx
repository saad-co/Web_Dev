export default function Die(props) {
    const renderDots = (value) => {
        const dots = [];
        for (let i = 0; i < value; i++) {
            dots.push(<div className="dot" key={i}></div>);
        }
        return dots;
    };
    return (
        <div className={props.status ? "Die-held" : "Die"} onClick={props.holding}>
            <div className="dot-container">
                {renderDots(props.value)}
            </div>
        </div>
    );
}