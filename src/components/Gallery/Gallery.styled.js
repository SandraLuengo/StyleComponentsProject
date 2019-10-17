import styled from "styled-components";
import Gallery from "./Gallery";

export default styled(Gallery).attrs({})`
  margin-top: 7vh;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom:5vh;
  .photosContainer {
    display: flex;
    justify-content: space-around;
    margin-bottom: 5vh;
    &:hover {
      cursor: pointer;
    }
  }
`;
