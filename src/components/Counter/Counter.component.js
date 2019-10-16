import React from 'react';
import styled from 'styled-components';
import {PlusCircle} from 'styled-icons/boxicons-regular/PlusCircle';
import {MinusCircle} from 'styled-icons/boxicons-regular/MinusCircle';
import {ReduxExplanation} from '../../components';


const PlusButton = styled(PlusCircle)`
  color: grey;
  width: 40px;
  margin:4px;
  &:hover{
      cursor: pointer;
  }
`
const MinusButton = styled(MinusCircle)`
  color: grey;
  width: 40px;
  margin:4px;
  &:hover{
    cursor: pointer;  
  }
`

const Counter = ({counter, incrementCounterAction, decrementCounterAction, className}) => {
    return(
    <div className={className}>
        <ReduxExplanation/>
        <div className='exampleContainer'>
          <PlusButton onClick={() => incrementCounterAction()} color={'red'}/>
          <MinusButton onClick={() => decrementCounterAction()} color={'pink'}/>
          <p className='counterNumber'>{counter}</p>
          <div className='variantText'>
              {counter %5 === 0 ? 'The counter is multipli of 5': 'The counter is not multipli of 5'}
          </div>
        </div>
    </div>
    )
}

export default Counter;