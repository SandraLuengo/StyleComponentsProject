
import styled from 'styled-components';
import Header from './Header';

export default styled(Header).attrs({})`
  color: ${({color}) => color};
`;