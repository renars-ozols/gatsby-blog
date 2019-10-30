import styled from "styled-components"

// export const Button = styled.button`
//     background-color: lightblue;
//     font-size: 2rem;
//     text-decoration: none;
//     display: block;
//     width: 15rem;
//     margin-left: ${props => props.marginleft || '0'};
//     margin-right: ${props => props.marginright || '0'};
//     ${({right}) => right && 'margin-left: auto;'}
//     ${({center}) => center && 'margin: auto;'}

//     &:visited {
//         color: yellow;
//     }
// `

export const Button = styled.button`
  background-color: ${props => props.theme.colors.black};
  border: none;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  padding: 0 1rem;
  font-size: 3rem;
  font-family: inherit;
  letter-spacing: 3px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`
