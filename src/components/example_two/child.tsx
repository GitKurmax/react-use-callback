import React, {MouseEventHandler, useEffect, memo} from 'react';

const Child = ({onClick, name}: {onClick: MouseEventHandler, name: number}) => {

    useEffect(() => {
        console.log(`Child ${name} rendered`)
    })

    return (
        <button className={"button-child"} onClick={onClick}>
            Child {name}
        </button>
    );
};

export default memo(Child);