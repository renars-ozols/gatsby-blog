import React from 'react'

import {Container} from './container.styles'

export default ({children, ...otherProps}) => (
    <Container {...otherProps}>{children}</Container>
)