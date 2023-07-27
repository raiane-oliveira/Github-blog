import { styled } from 'styled-components'

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-top: 1.5px solid ${(props) => props.theme['base-border']};
  padding: 1rem;
  margin-bottom: 4rem;

  img {
    display: block;
    max-width: 100%;
  }
`

export const TitleCommentsContainer = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 700;
`

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem;
  white-space: pre-wrap;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 0.325rem;

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
  }
`

export const AuthorContainer = styled.address`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-style: normal;

  img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-subtitle']};
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: 0.3s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['base-subtitle']};
    }
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    margin-left: auto;
  }
`

export const NoCommentsAlert = styled.div`
  color: ${(props) => props.theme['base-span']};
`
