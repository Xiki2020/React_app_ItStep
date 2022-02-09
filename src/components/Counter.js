import React, {useState} from 'react';
import MyButton from "./MyButton/MyButton";

const Counter = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1)
    };

    const dec = () => {
        setCount(count - 1)
    };

    return (
        <>
            <h1>{count}</h1>
            <MyButton action={inc}>+</MyButton>
            <button onClick={dec}>-</button>
        </>
    );
};

export default Counter;