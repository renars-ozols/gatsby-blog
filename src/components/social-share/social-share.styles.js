import styled from 'styled-components'

import Heading from '../heading/heading'

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-bottom: 2px solid ${props => props.theme.colors.grey};
    padding: 1rem 0;
`

export const StyledHeading = styled(Heading)`
    color: inherit;
    margin-right: 1rem;
`

export const SocialWrapper = styled.div`
    width: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`