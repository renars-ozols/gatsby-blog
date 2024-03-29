import styled from "styled-components"

export const StyledSvg = styled.svg`
  height: 4rem;
  width: 4rem;
  fill: ${props => props.theme.colors.white};

  ${({ theme }) => theme.media.tablet`
      height: 2rem;
      width: 2rem;
    `}
`
