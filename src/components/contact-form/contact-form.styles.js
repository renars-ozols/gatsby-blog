import styled from "styled-components"

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
