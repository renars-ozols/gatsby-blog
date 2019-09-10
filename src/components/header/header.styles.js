import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderWrapper = styled.header`
  position: relative;
  font-size: 2rem;
`
export const LogoContainer = styled(Link)`
  color: white;
  text-decoration: none;
`
export const LogoAndMenuWrapper = styled.div`
  height: 5rem;
  background: ${props => props.theme.colors.black};
  display: flex;
  justify-content: space-between;
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`
export const MenuIcon = styled.span`
  position: relative;

  &,
  &::before,
  &::after {
    width: 3rem;
    height: 2px;
    background-color: white;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.2s;
  }

  &::before {
    top: ${props => (props.active ? 0 : -0.8)}rem;
    transform: ${props => (props.active ? "rotate(135deg)" : "")};
  }
  &::after {
    top: ${props => (props.active ? 0 : 0.8)}rem;
    transform: ${props => (props.active ? "rotate(-135deg)" : "")};
  }

  & {
    background-color: ${props => (props.active ? "transparent" : "")};
  }
`

export const Overlay = styled.div`
  background-color: yellow;
  opacity: 0.2;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`
export const Nav = styled.nav`
  position: absolute;
  background-color: red;
  right: 0;
  width: ${props => (props.active ? 100 : 0)}%;
  height: 100vh;
  z-index: 1000;
  opacity: 0.8;
  transition: all 1s;
`
export const NavItem = styled(Link)`
  background-color: yellow;
`

export const NavItemWrapper = styled.div`
  display: ${props => (props.active ? "flex" : "none")};
`
