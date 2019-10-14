import styled from 'styled-components'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

export const StyledLink = styled(Link)`
    display: flex;
    flex-basis: 100%;
    text-decoration: none;
    border-radius: 3px;
    overflow: hidden;
    line-height: 1.2;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.15);
    padding-right: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: ${props => props.theme.colors.black};
    font-weight: bold;
    align-items: center;
`

export const StyledImg = styled(Img)`
    margin-right: 1rem;
    flex-shrink: 0;
`