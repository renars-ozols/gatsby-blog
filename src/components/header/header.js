import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { useLockBodyScroll } from "react-use"
import Icon from "../icon/icon"
import {
  HeaderWrapper,
  LogoContainer,
  LogoAndMenuWrapper,
  ItemWrapper,
  MenuIcon,
  Overlay,
  Nav,
  NavItem,
  IconLinkWrapper,
  IconLink,
} from "./header.styles"

const Header = ({ siteTitle }) => {
  const [menuActive, showHideMenu] = useState(false)

  const closeMenu = () => {
    if (!menuActive) {
      return
    } else {
      showHideMenu(false)
    }
  }

  useLockBodyScroll(menuActive)

  useEffect(() => {
    const handleResize = () => showHideMenu(false)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <HeaderWrapper>
      <LogoAndMenuWrapper>
        <ItemWrapper>
          <LogoContainer to="/" onClick={closeMenu}>
            {siteTitle}
          </LogoContainer>
        </ItemWrapper>
        <ItemWrapper>
          <MenuIcon
            active={menuActive}
            onClick={() => showHideMenu(!menuActive)}
          />
        </ItemWrapper>
      </LogoAndMenuWrapper>
      <Overlay active={menuActive} />
      <Nav active={menuActive}>
        <NavItem to="/" onClick={closeMenu}>
          Home
        </NavItem>
        <NavItem to="/page-2/" onClick={closeMenu}>
          Categories
        </NavItem>
        <NavItem to="/about" onClick={closeMenu}>
          About
        </NavItem>
        <NavItem to="/contact" onClick={closeMenu}>
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
