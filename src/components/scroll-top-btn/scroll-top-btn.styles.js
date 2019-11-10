import styled from "styled-components"

export const StyledBtn = styled.a`
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  font-size: 4rem;
  z-index: 5000;
  right: 2rem;
  bottom: 2rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
  text-decoration: none;
  padding: 0 2rem;
  border-radius: 3px;
`
