import PropTypes from "prop-types"
import React, { useState } from "react"
import { useLockBodyScroll } from "react-use"
import {
  HeaderWrapper,
  LogoContainer,
  LogoAndMenuWrapper,
  ItemWrapper,
  MenuIcon,
  Nav,
  NavItem,
  NavItemWrapper,
} from "./header.styles"

const Header = ({ siteTitle }) => {
  const [menuActive, showHideMenu] = useState(false)
  useLockBodyScroll(menuActive)
  console.log(menuActive)

  return (
    <HeaderWrapper>
      <LogoAndMenuWrapper>
        <ItemWrapper>
          <LogoContainer to="/">{siteTitle}</LogoContainer>
        </ItemWrapper>
        <ItemWrapper>
          <MenuIcon
            active={menuActive}
            onClick={() => showHideMenu(!menuActive)}
          />
        </ItemWrapper>
      </LogoAndMenuWrapper>
      <Nav active={menuActive}>
        <NavItemWrapper active={menuActive}>
          <NavItem to="/" onClick={() => showHideMenu(!menuActive)}>
            Home
          </NavItem>
          <NavItem to="/about" onClick={() => showHideMenu(!menuActive)}>
            About
          </NavItem>
        </NavItemWrapper>
      </Nav>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
