import React, {MouseEvent, MouseEventHandler, useCallback, useState} from 'react';
import Child from "./child";

const Parent = () => {
    const [stateOne, setStateOne] = useState<number>(0)
    const [stateTwo, setStateTwo] = useState<number>(0)

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
        let button = e.target as HTMLButtonElement
    }, [stateOne])

    const handleStateChange = () => {
        setStateOne(stateOne + 1)
    }

    const handleAnotherStateChange = () => {
        setStateTwo(stateTwo + 1)
    }

    return (
        <div>
            <h1>Example two</h1>
            <p className={"text"}>
                We have a list of child components to which we pass a function handleClick.
                When we change a parent state every time the new function handleClick passes to child
                and therefore child component rerender. We can wrap a function with useCallback hook
                dependent of stateOne variable and wrap child component to memo function. When we change
                stateTwo var parent component rerender but child component do not rerender because of
                useCallback returns same function instance.
            </p>
            <div>
                <button className={'button'} onClick={handleStateChange}>Change parent state</button>
                <button className={'button'} onClick={handleAnotherStateChange}>Change another parent state</button>
            </div>
            <div>
                State one value - {stateOne}
            </div>
            <div>
                State two value - {stateTwo}
            </div>
            {[0, 1, 2, 3].map((el, index) => <Child onClick={handleClick} name={index}></Child>)}
        </div>
    );
};

export default Parent;