import styled from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const Wrapper = styled.div`
  padding-bottom: 1.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.white2};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

export const StyledBg = styled(BackgroundImage)`
  height: 30rem;
  margin-bottom: 1rem;
`

export const StyledSpan = styled.span`
  font-size: 2rem;
  padding: 0 1rem;
  font-style: italic;
`

export const StyledParagraph = styled.p`
  margin: 1rem 0;
  padding: 0 1rem;
`

export const StyledLink = styled(Link)`
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  padding: 0 1rem;
  font-size: 2rem;
  display: block;
  margin-right: 1rem;
  margin-left: auto;
  width: 13.5rem;

  ${({ theme }) => theme.media.laptop`
      transition: all .2s;
      &:hover {
        background-color: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};
        transform: translateY(-0.3rem);
      }
    `}
`
