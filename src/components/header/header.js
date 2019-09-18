import PropTypes from "prop-types"
import React, { useState } from "react"
import { useLockBodyScroll } from "react-use"
import Icon from "../icon/icon"
import {
  HeaderWrapper,
  LogoContainer,
  LogoAndMenuWrapper,
  ItemWrapper,
  MenuIcon,
  Nav,
  NavItem,
  IconLinkWrapper,
  IconLink,
} from "./header.styles"

const Header = ({ siteTitle }) => {
  const [menuActive, showHideMenu] = useState(false)
  const toggleMenu = () => {
    showHideMenu(!menuActive)
  }
  useLockBodyScroll(menuActive)

  return (
    <HeaderWrapper>
      <LogoAndMenuWrapper>
        <ItemWrapper>
          <LogoContainer to="/" onClick={toggleMenu}>
            {siteTitle}
          </LogoContainer>
        </ItemWrapper>
        <ItemWrapper>
          <MenuIcon active={menuActive} onClick={toggleMenu} />
        </ItemWrapper>
      </LogoAndMenuWrapper>
      <Nav active={menuActive}>
        <NavItem to="/" onClick={toggleMenu}>
          Home
        </NavItem>
        <NavItem to="/page-2/" onClick={toggleMenu}>
          Categories
        </NavItem>
        <NavItem to="/about" onClick={toggleMenu}>
          About
        </NavItem>
        <NavItem to="/contact" onClick={toggleMenu}>
          Contact
        </NavItem>
        <IconLinkWrapper>
          <IconLink href="#">
            <Icon iconName={"icon-facebook2"} />
          </IconLink>
          <IconLink href="#">
            <Icon iconName={"icon-twitter"} />
          </IconLink>
          <IconLink href="#">
            <Icon iconName={"icon-pinterest"} />
          </IconLink>
        </IconLinkWrapper>
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
