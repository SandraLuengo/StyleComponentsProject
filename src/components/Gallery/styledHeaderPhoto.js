import styled from 'styled-components';

export const HeaderPhotos = styled.p.attrs({})`
    color: ${({id,actualPhoto})=> id===actualPhoto ? '#0095a0' : '#9eccc1'};
    font-weight:bold;
    transition: color .2s ease-in-out;
`;