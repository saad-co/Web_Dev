import React, { useState, useEffect } from "react";

export default function Head(props) {
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {
        let interval;
        if (props.startStop) {
            interval = setInterval(() => {
                setSecondsElapsed(prevSeconds => prevSeconds + 1);
            }, 1000);
        }
        if (!props.startStop) {
            setSecondsElapsed(0);
        }
        return () => {
            clearInterval(interval);
        };
    }, [props.startStop]);

    return (
        <div className="head">
            <button className="count-but">Count: {props.value}</button>
            <h1 className="title">Tenzies</h1>
            <button className="count-but">Time: {secondsElapsed}</button>
        </div>
    );
}
