import styled from 'styled-components'
import {Link} from 'gatsby'

export const StyledLink = styled(Link)`
    border: 1px solid ${props => props.theme.colors.grey};
    border-radius: 3px;
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 0.2rem 0.5rem;
    text-decoration: none;
    color: ${props => props.theme.colors.grey};
    font-weight: bold;
    text-transform: lowercase;
`