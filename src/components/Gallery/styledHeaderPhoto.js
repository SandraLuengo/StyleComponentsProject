import styled from 'styled-components';

export const HeaderPhotos = styled.p.attrs({})`
  ${(props)=>console.log(props)}
    color: ${({id,actualPhoto})=> id===actualPhoto ? 'red' : 'black'}
`;