import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const StyledBg = styled(BackgroundImage)`
  height: 95vh;
  width: 100%;
  background-position: center center;

  ${({ theme }) => theme.media.tablet`
    height: 50vh;
  `}

  ${({ theme }) => theme.media.laptop`
    &,&::before,&::after {
      background-position-y: 40% !important;
    }
  `}
`
