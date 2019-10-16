import styled from 'styled-components'

import Heading from '../heading/heading'

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1rem;
    padding: 0.2rem 0;
    border: solid ${props => props.theme.colors.grey};
    border-width: 2px 0;
`

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledHeading = styled(Heading)`
    color: inherit;
    margin-right: 1rem;
`