import styled from 'styled-components'
import {Link} from 'gatsby'

export const StyledListItem = styled.li`
    border: 1px solid ${props => props.theme.colors.grey};
    border-radius: 3px;
    padding: 0.2rem 0.5rem;

    &:not(:last-child) {
        margin-right: 1rem;
    }

`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.grey};
    font-weight: bold;
`