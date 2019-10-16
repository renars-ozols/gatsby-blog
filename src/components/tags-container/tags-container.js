import React from 'react'

import {Wrapper, StyledHeading, TagsContainer} from './tags-container.styles'

export default ({children}) => (
    <Wrapper>
        <StyledHeading h5 uppercase noMargin>Tags:</StyledHeading>
        <TagsContainer>{children}</TagsContainer>
    </Wrapper>
)