import styled from 'styled-components'

import Heading from '../heading/heading'

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem 0;
    border: solid ${props => props.theme.colors.grey};
    border-width: 2px 0 ${props => props.noBorder ? 0 : 2}px 0;
`

export const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledHeading = styled(Heading)`
    color: inherit;
    margin-right: 1rem;
`