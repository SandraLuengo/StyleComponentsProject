import styled from "styled-components";
import ComponentExplanation from "./ComponentExplanation";

export default styled(ComponentExplanation).attrs({})`
  font-size: 1.1em;
  text-align: left;
  padding: 0 10%;
  pre {
    background-color: #e6e6e6;
    margin-bottom: 50px;
  }
  .note {
      width:100%;
      background-color:#fff42996;
      padding: 2% 1%;

      &__important {
          font-weight:bold;
      }
  }
`;
