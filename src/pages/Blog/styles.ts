import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 2.5rem 1rem;
`

export const PostsContainer = styled.div``

export const PostCard = styled(Link)`
  & + & {
    margin-top: 1rem;
  }
  text-decoration: none;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding: 1.5rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme['base-post']};
`

export const PostCardTitle = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  span {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.4;
  }

  time {
    margin-top: 0.25rem;
    font-size: 0.675rem;
    color: ${(props) => props.theme['base-span']};
    line-height: 1.6;
    text-align: right;
  }
`

export const PostCardBody = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 0.875rem;
  line-height: 1.4;
  color: ${(props) => props.theme['base-text']};
`
