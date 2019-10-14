import styled from 'styled-components'

export const TagsContainer = styled.div`
    margin: 1rem 0;
    padding-bottom: 1rem;
    border: solid ${props => props.theme.colors.grey};
    border-width: 2px 0;
    display: flex;
    flex-wrap: wrap;
`