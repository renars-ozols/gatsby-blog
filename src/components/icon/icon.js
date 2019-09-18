import React from "react"
import { withPrefix } from "gatsby"
import { StyledSvg } from "./icon.styles"
import PropTypes from "prop-types"

const Icon = props => (
  <StyledSvg>
    <use xlinkHref={withPrefix(`icons/sprite.svg#${props.iconName}`)}></use>
  </StyledSvg>
)

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
}

export default Icon
