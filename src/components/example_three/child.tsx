import React, { useEffect } from "react";

interface IProps {
    updateOne: () => void
    updateTwo: () => void
}

export default function Child({ updateOne, updateTwo }: IProps) {
    useEffect(() => {
        updateOne();
    }, [updateOne]);

    useEffect(() => {
        updateTwo();
    }, [updateTwo]);

    return <div className="App" />
}
