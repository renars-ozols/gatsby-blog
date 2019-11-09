import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const StyledLink = styled(Link)`
  background-color: ${props => props.theme.colors.white2};
  display: flex;
  flex-basis: 100%;
  text-decoration: none;
  border-radius: 3px;
  overflow: hidden;
  line-height: 1.2;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
  padding-right: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: ${props => props.theme.colors.black};
  font-weight: bold;
  align-items: center;

  ${({ theme }) => theme.media.laptop`
      transition: all .2s;
      &:hover {
        background-color: ${props => props.theme.colors.grey};
        color: ${props => props.theme.colors.white};
        transform: translateY(-0.3rem);
      }
    `}
`

export const StyledImg = styled(Img)`
  margin-right: 1rem;
  flex-shrink: 0;
`
