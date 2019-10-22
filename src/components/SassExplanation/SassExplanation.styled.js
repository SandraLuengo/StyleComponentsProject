import styled from "styled-components";
import SassExplanation from "./SassExplanation";

export default styled(SassExplanation).attrs({})`
  font-size: 1.1em;
  text-align: left;
  padding: 0 10%;
  pre {
    background-color: #e6e6e6;
    margin-bottom: 50px;
  }
`;
