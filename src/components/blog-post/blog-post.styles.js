import styled from "styled-components"
import Container from "../container/container"
import BackgroundImage from "gatsby-background-image"

export const StyledBackground = styled(BackgroundImage)`
  height: 50vh;
`
export const StyledContainer = styled(Container)`
  padding-bottom: 3rem;
  ${({ theme }) => theme.media.tablet`
    margin: 0 auto;
    width: 90%;
  `}
  ${({ theme }) => theme.media.laptop`
    width: 80%;
  `};
`

export const HeadingWrapper = styled.div`
  position: absolute;
  width: 90%;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`

export const StyledSpan = styled.span`
  display: block;
  font-size: 2rem;
  font-style: italic;
  font-weight: bold;
  margin: 1.5rem 0;
`
