import React, {useEffect, memo} from 'react';

const ChildTwo = ()  => {

    useEffect(()=> console.log('Child two rerenders'))

    return (
        <div className={'ex-one child'}>
            Child two
        </div>
    );
};

export default ChildTwo;