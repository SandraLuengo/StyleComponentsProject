import styled from "styled-components";
import Instructions from "./Instructions";
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    positionScroll:   state.scroll.positionScroll
});


export default connect(mapStateToProps)(styled(Instructions).attrs({})`
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  .instructionsContainer {
    
  }

  //Media Query
  .isTablet {
   
  }

  //Animations

  @keyframes hand_move {
    0% {
      left: 5%;
    }
    100% {
      left: 90%;
    }
  }
`);
