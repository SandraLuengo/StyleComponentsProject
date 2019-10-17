import styled from 'styled-components';

export const Button = styled.button.attrs({})`
    background-color: ${({color}) => color};
    border:none;
    padding:1%;
    margin:4px;
    border-radius:4px;
    color: ${({font}) => font};
    font-weight: bold;
`;