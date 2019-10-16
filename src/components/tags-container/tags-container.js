import React from 'react'

import {Wrapper, StyledHeading, TagsWrapper} from './tags-container.styles'

const TagsContainer = ({children, heading, ...props }) => (
    <Wrapper {...props}>
        {
            heading && (<StyledHeading h5 uppercase noMargin>Tags:</StyledHeading>)
        }
        <TagsWrapper>{children}</TagsWrapper>
    </Wrapper>
)

export default TagsContainer