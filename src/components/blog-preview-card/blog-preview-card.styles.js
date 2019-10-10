import styled from 'styled-components'
import { Link } from "gatsby"

export const Wrapper = styled.div`
    padding-bottom: 1.5rem;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15);
    
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`

export const StyledSpan = styled.span`
    font-size: 2rem;
    padding:0 1rem;
    font-style: italic;
`

export const StyledParagraph = styled.p`
    margin: 1rem 0;
    padding:0 1rem;
`

export const StyledLink = styled(Link)`
    border: 1px solid ${props => props.theme.colors.black};
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.colors.black};
    padding: 0 1rem;
    font-size: 2rem;
    display: block;
    margin-right: 1rem;
    margin-left: auto;
    width: 13.5rem;
`