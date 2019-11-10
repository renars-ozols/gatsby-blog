import PropTypes from "prop-types"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useLockBodyScroll } from "react-use"
import Icon from "../icon/icon"
import ScrollTopBtn from "../scroll-top-btn/scroll-top-btn"

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

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const [menuActive, showHideMenu] = useState(false)
  const closeMenu = () => {
    if (!menuActive) {
      return
    } else {
      showHideMenu(false)
    }
  }

  useLockBodyScroll(menuActive)

  // useEffect(() => {
  //   const handleResize = () => showHideMenu(false)
  //   window.addEventListener("resize", handleResize)
  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // })

  return (
    <HeaderWrapper id="top">
      <LogoAndMenuWrapper>
        <LogoContainer to="/" onClick={closeMenu}>
          <Img fixed={data.file.childImageSharp.fixed} />
        </LogoContainer>
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
        <NavItem to="/#most-popular" onClick={closeMenu}>
          Most Popular
        </NavItem>
        <NavItem to="/#about" onClick={closeMenu}>
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
      <ScrollTopBtn />
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
