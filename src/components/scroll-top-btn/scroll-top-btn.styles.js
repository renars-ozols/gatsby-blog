import styled from "styled-components"

export const StyledBtn = styled.a`
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  font-size: 2rem;
  z-index: 5000;
  right: 2rem;
  bottom: 2rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
  text-decoration: none;
  padding: 0 1rem;
  border-radius: 3px;

  ${props => props.theme.media.laptop`
      font-size: 3rem
      padding: 0 1.5rem;
    `}

  ${props => props.theme.media.desktop`
      display: none;
    `}
`
