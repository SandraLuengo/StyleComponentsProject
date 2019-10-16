import styled from 'styled-components';
import img from '../../media/flowers.jpg';

export const Photo = styled.img.attrs({
    src: img
})`
  width: ${({photos})=> `calc(100vw / ${photos} - 20px)`};
  height:20vh;
  margin: 10px 0;
  filter: ${({id,actualPhoto})=> id===actualPhoto ? 'grayscale(0%)' : 'grayscale(60%)'};
  transition: color .2s ease-in-out;
`;