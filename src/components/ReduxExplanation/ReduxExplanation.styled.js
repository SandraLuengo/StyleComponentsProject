import styled from "styled-components";
import ReduxExplanation from "./ReduxExplanation";

export default styled(ReduxExplanation).attrs({})`
  font-size: 1.1em;
  text-align: left;
  padding: 0 10%;
  code {
    font-size: 0.9em;
  }
  pre {
    background-color:#e6e6e6;
    margin-bottom:50px;
  }
  .important {
    font-weight: bold;
  }
`;
