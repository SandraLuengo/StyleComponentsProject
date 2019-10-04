import React from 'react';
import ContainerStyle from './Container.styled';
const Container = ({ContainerStyle}) => {
    console.log(ContainerStyle)
    return(
        <div className='helloContainer'>Hola!</div>
    )
}

export default Container;