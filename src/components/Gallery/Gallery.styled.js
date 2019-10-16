import styled from "styled-components";
import Gallery from "./Gallery";

export default styled(Gallery).attrs({})`
  margin-top: 7vh;
  .photosContainer {
    display: flex;
    justify-content: space-around;
    &:hover{
        cursor: pointer;
    }
  }
`;
