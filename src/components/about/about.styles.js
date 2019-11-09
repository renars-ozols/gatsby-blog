import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const StyledSection = styled.section`
  padding: 1rem 0;
`

export const StyledBg = styled(BackgroundImage)`
  height: 30rem;

  ${({ theme }) => theme.media.tablet`
    &,&::before,&::after {
      background-position-y: 40% !important;
    }
  `}
`
export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.white2};
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  overflow: hidden;
`
export const TextWrapper = styled.div`
  padding: 1rem;
`
