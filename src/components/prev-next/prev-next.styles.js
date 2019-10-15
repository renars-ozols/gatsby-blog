import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledLeftLink = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    line-height: 2rem;
    color: ${props => props.theme.colors.black};
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
`
export const StyledRightLink = styled(StyledLeftLink)`
    align-items: flex-end;
    margin-left: auto;
`

export const StyledSpan = styled.span`
    margin-bottom: 1rem;
    font-size: 4rem;
`