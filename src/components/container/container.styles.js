import styled, { css } from "styled-components"

export const Container = styled.div`
  display: block;
  width: 100%;
  min-height: 70vh;
  font-size: 1.5rem;
  padding: 0 1.5rem;

  ${props =>
    props.flex &&
    css`
      ${({ theme }) => theme.media.tablet`
        display: flex;
        flex-wrap: wrap;

        section:first-child {
          flex: 0 0 100%;
          display: flex;
          flex-wrap: wrap;

          & :first-child {
            flex: 1 1 100%;
          }

          & :nth-last-child(-n+2) {
            flex: 1 0 45%;
            align-self: stretch;
          }

          & :nth-child(3) {
            margin-right: 2rem;
            margin-bottom: 0;
          }
        }

        section:nth-child(4) {
          order: 2;
          flex: 1 0 45%;
          padding: 0;
        }

        section:nth-child(2) {
          order: 1;
          flex: 1 0 45%
          margin-right: 2rem;
          
        }

        section:nth-child(3) {
          order: 3;
        }
      `}

      ${({ theme }) => theme.media.laptop`
      padding: 2rem 2rem;

      section:first-child {
          div:nth-child(2) {
          flex: 0 0 60%;
          margin: 0 auto 4rem auto;
        }

        & :nth-child(3) {
            margin-right: 4rem;
          }
      }

      section:nth-child(2) {
          margin-right: 4rem;
          margin-top: 2.5rem;
        }

        section:nth-child(3) {
          flex: 0 0 60%;
          margin: 2rem auto 0 auto;
        }

        section:nth-child(4) {
          margin-top: 2.5rem;
        }
      `}
    `}
`
