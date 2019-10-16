import styled from 'styled-components';
import Counter from './Counter.component';

const colors = ['red','orange','yellow','green','blue','purple','violet'];

export default styled(Counter).attrs({})`

.exampleContainer {
    background-color: #00968817;
    width: 70%;
    margin: 0 auto;
    padding: 5%;
}

.variantText {
    color: ${({counter}) => counter%5 === 0 ? '#ffb3cb' : '#949494' };
    transition: color .2s ease-in-out;
    font-size: 1.3em;
}

.counterNumber {
    color: ${({counter}) => colors[counter] ? colors[counter] : '#949494'};
    font-weight:bold;
    font-size: 1.3em;
}
`;