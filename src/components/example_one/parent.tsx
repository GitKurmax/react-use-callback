import React, {useState} from 'react';
import ChildOne from "./childOne";
import ChildTwo from "./childTwo";

const Parent = () => {
    const [parentState, setParentState] = useState<number>(0)

    const handleClick = () => {
        setParentState(parentState + 1)

    }

    return (
        <div>
            <h1>Example one</h1>
            <p className={'text'}>
                It is actually not a useCallback case but it is an example of React.memo function.
                By clicking on button we change the parent component state. It causes rerender of the
                child components. But by wrapping the child component with memo function we prevent
                rerender of this component.
            </p>
            <p className={'text'}>
                The first child component is wrapped by memo function but second is not.
                You can see in console the result of useEffect hook.
            </p>
            <button className={'button'} onClick={handleClick}>Change parent state</button>
            <ChildOne />
            <ChildTwo />
        </div>
    );
};

export default Parent