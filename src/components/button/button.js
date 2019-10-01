import React from 'react'

import {Button} from './button.styles'

export default ({children, ...otherProps}) => (
    <Button {...otherProps}>{children}</Button>
)