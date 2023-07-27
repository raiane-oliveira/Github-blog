import { styled } from 'styled-components'

export const SearchFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const TitleSearchFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    line-height: 1.6;
  }
`

export const TitleSearchForm = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 700;
`

export const FormContainer = styled.form`
  width: 100%;

  input {
    border-radius: 0.375rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem 1rem;
    width: 100%;

    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
