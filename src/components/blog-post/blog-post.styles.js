import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import {StyledSpan} from '../blog-preview-card/blog-preview-card.styles'

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

export const Content = styled.div`
    font-size: 1.5rem;
    padding: 0 1rem;
`
export const StyledDate = styled(StyledSpan)`
    margin: 1rem 0;
`