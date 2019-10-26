import styled from "styled-components"
import { Link } from "gatsby"

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.black};
`
export const Wrapper = styled.div`
  padding: 0 2.5rem;
`

export const Content = styled.div`
  border-top: 1px solid ${props => props.theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const StyledContent = styled(Content)`
  margin-top: 2rem;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`

export const StyledP = styled.p`
  padding: 0.5rem 0;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
`
