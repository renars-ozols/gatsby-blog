import styled from "styled-components"
import { Button } from "../button/button.styles"

export const StyledSection = styled.section`
  padding: 1rem 0;
`

export const Wrapper = styled.div`
  border-radius: 3px;
  margin-bottom: 4rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
`
export const StyledButton = styled(Button)`
  margin-top: 0.8rem;
  box-shadow: none;
  font-size: 2.5rem;
`
