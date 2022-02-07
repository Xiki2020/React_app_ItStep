import React from 'react';

const MyButton = ({children, changeText}) => {

    return <button onClick={() => changeText('Thanks you!')}>{children}</button>
};

export default MyButton;