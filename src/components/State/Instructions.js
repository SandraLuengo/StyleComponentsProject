import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  * as scrollActions from 'redux/modules/scroll';


const mapStateToProps = (state) => ({ positionScroll:   state.scroll.positionScroll });

const mapDispatchToProps = (dispatch) => bindActionCreators( scrollActions , dispatch);

const Instructions = ({strings:{Instructions}, className, setPositionScroll, setCarouselScroll}) => {
    return(
        <div className={`${className} instructionsContainer`}>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Instructions);

