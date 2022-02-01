import React, {useEffect, memo} from 'react';

const ChildOne = () => {

    useEffect(()=> console.log('Child one rerenders'))

    return (
        <div className={'ex-one child'}>
            Child one
        </div>
    );
};

export default memo(ChildOne);