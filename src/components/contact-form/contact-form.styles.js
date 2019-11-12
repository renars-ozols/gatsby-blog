import styled, { keyframes } from "styled-components"

export const StyledForm = styled.form`
  background-color: #fff;
  padding: 1rem 1rem;
  margin-bottom: 3rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  border-radius: 3px;

  ${({ theme }) => theme.media.tablet`
    margin: 0 auto 3rem auto;
    width: 70%;
  `}
`

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  & label {
    font-size: 2rem;
  }

  & span {
    color: red;
  }
`
export const StyledInput = styled.input`
  font-size: 2rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: ${props => props.border || props.theme.colors.grey + " 1px solid"};

  &:focus {
    outline: none;
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.4);
  }
`
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
export const Loader = styled.div`
  margin: 0.2rem auto;
  border: 0.5rem solid ${props => props.theme.colors.white};
  border-radius: 50%;
  border-top: 0.5rem solid ${props => props.theme.colors.grey};
  width: 2.8rem;
  height: 2.8rem;
  animation: ${spin} 0.8s linear infinite;
`
