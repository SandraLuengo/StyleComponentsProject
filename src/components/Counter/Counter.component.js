import React from 'react';

const Counter = ({counter, incrementCounterAction, decrementCounterAction, className}) => {
    return(
    <div className={className}>
        <h2>Styled Component with Redux</h2>
        <button onClick={() => incrementCounterAction()}>Increment Counter</button>
        <button onClick={() => decrementCounterAction()}>Decrement Counter</button>
        <p className='counterNumber'>{counter}</p>
        <div className='variantText'>
            {counter %5 === 0 ? 'El contador es multiplo de 5': 'El contador no es multiplo de 5'}
        </div>
    </div>
    )
}

export default Counter;