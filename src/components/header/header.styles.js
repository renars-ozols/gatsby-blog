import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderWrapper = styled.header`
  position: relative;
  font-size: 2rem;
  background-color: ${props => props.theme.colors.black};
`
export const LogoContainer = styled(Link)`
  text-decoration: none;
`
export const LogoAndMenuWrapper = styled.div`
  position: relative;
  z-index: 1000;
  height: 5rem;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet`
    width: 20%;
  `}
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
    background-color: ${props => props.theme.colors.white};
    display: inline-block;

    ${({ theme }) => theme.media.tablet`
      display: none;
    `}
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
  background-color: ${props => props.theme.colors.black};
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: ${props => (props.active ? 100 : 0)}%;
  z-index: 100;
  opacity: 0.95;
  transition: width 0.2s;

  ${({ theme }) => theme.media.tablet`
      display: none;
    `}
`

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  display: ${props => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 500;

  ${({ theme }) => theme.media.tablet`
    display: flex;
    flex-direction: row;
    width: 80%;
    right: 0;
    height: 5rem;
    justify-content: space-between;
  `}
`
export const NavItem = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 4rem;
  margin-bottom: 1rem;
  align-self: center;
  text-decoration: none;
  text-transform: uppercase;

  ${({ theme }) => theme.media.tablet`
      font-size: 2rem;
      margin-bottom: 0;
    `}

  ${({ theme }) => theme.media.laptop`
      transition: all .2s;
      &:hover {
        color: ${props => props.theme.colors.grey2};
        transform: scale(1.5) translateY(-0.5rem);
      }
    `}
`
export const IconLinkWrapper = styled.div`
  width: 25rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 2px solid ${props => props.theme.colors.white};

  ${props => props.theme.media.tablet`
      width: 20%;
      height: 5rem;
      border-top: none;
      align-items: center;
      padding: 0 1rem;
    `}
`
export const IconLink = styled.a`
  background-color: ${props => props.theme.colors.black};
  display: flex;
  height: 4rem;

  ${({ theme }) => theme.media.tablet`
      height: 2rem;
    `}

  ${({ theme }) => theme.media.laptop`
      transition: all .2s;
      &:hover {
        color: ${props => props.theme.colors.grey2};
        transform: scale(1.5) translateY(-0.5rem);
      }
    `}
`
