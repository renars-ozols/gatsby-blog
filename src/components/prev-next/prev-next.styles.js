import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
`

export const StyledPrevLink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  line-height: 2rem;
  color: ${props => props.theme.colors.black};
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;

  ${({ theme }) => theme.media.laptop`
      transition: all .2s;
      &:hover {
        transform: translateX(-0.4rem);
      }
    `}
`
export const StyledNextLink = styled(StyledPrevLink)`
  align-items: flex-end;
  margin-left: auto;

  ${({ theme }) => theme.media.laptop`
      &:hover {
        transform: translateX(0.4rem);
      }
    `}
`

export const StyledSpan = styled.span`
  margin-bottom: 1rem;
  font-size: 4rem;
`
