import styled from 'styled-components';
import Counter from './Counter.component';

const colors = ['blue','red','green','purple','pink','yellow','orange'];

export default styled(Counter).attrs({})`

.variantText {
    color: ${({counter}) => counter%5 === 0 ? '#fabada' : '#949494' };
    transition: color .2s ease-in-out;
    font-size: 1.3em;
}

.counterNumber {
    color: ${({counter}) => colors[counter] ? colors[counter] : '#949494'};
    font-weight:bold;
    font-size: 1.3em;
}
`;