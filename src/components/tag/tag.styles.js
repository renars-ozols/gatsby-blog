import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 3px;
  margin: 0.3rem 1rem 0.3rem 0;
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  color: ${props => props.theme.colors.grey};
  font-weight: bold;
  text-transform: lowercase;

  ${({ theme }) => theme.media.laptop`
      transition: all .2s;
      &:hover {
        background-color: ${props => props.theme.colors.grey};
        color: ${props => props.theme.colors.white};
        transform: translateY(-0.3rem);
      }
    `}
`
