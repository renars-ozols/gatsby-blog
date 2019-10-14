import styled from 'styled-components'

export const Container = styled.div`
    display: block;
    width: 100%;
    min-height: 90vh;
    font-size: 1.5rem;
    padding: 0 1.5rem;
    padding-top: ${props => props.paddingTop ? '1' : '0'}rem;
`