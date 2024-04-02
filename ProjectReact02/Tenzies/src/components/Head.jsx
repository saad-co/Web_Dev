import React, { useState, useEffect } from "react";

export default function Head(props) {
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [gameStarted, setGameStarted] = useState(props.startStop);

    useEffect(() => {
        let timer;
        if (gameStarted) {
            timer = setInterval(() => {
                setSecondsElapsed(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            setSecondsElapsed(0); // Reset seconds elapsed when game stops
        }

        return () => {
            clearInterval(timer);
        };
    }, [gameStarted]);

    return (
        <div className="head">
            <button className="count-but">Count: {props.value}</button>
            <h1 className="title">Tenzies</h1>
            <button className="count-but">Time: {secondsElapsed}s</button>
        </div>
    );
}
