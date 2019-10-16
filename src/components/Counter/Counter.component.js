import React from 'react';

const Counter = ({counter, counterAction}) => {
    return(<div><button onClick={() => counterAction()}>Increment Counter</button>{counter}</div>)
}

export default Counter;