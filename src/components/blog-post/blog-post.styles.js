import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

export const StyledBackground = styled(BackgroundImage)`
    height: 50vh;
`

export const HeadingWrapper = styled.div`
    position: absolute;
    width: 90%;
    top: 20%;
    left: 50%;
    transform:translateX(-50%);
`

export const AuthorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.7rem;
    font-style: italic;
    font-weight: bold;
    margin: 1rem 0;
`