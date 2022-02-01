import React, { useEffect, useState, useCallback } from "react";
import Child from "./child";

export default function Parent() {
    const [counter, setCounter] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const updateOne = () => {
        console.log(
            "I`m not memoized"
        );
    };

    const updateTwo = useCallback(() => {
        console.log(
            "I`m memoized"
        );
    }, [counter]);

    return (
        <div className="App">
            <button className={'button'} onClick={() => setCounter(counter + 1)}>One</button>
            <br />
            <button className={'button'} onClick={() => setCounterTwo(counterTwo + 1)}>
                Two
            </button>
            <Child updateOne ={updateOne} updateTwo ={updateTwo} />
        </div>
    );
}