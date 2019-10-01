import styled from 'styled-components'

export const Button = styled.button`
    background-color: lightblue;
    font-size: 2rem;
    text-decoration: none;
    display: block;
    width: 15rem;
    margin-left: ${props => props.marginleft || '0'};
    margin-right: ${props => props.marginright || '0'};
    /* ${({right}) => right && 'margin-left: auto;'}
    ${({center}) => center && 'margin: auto;'} */
`