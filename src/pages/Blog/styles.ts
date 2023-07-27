import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const BlogPageContainer = styled.main`
  @media (min-width: 848px) {
    margin: 0 1.5rem;
  }
`

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 2.5rem 1rem;

  @media (min-width: 848px) {
    max-width: 1152px;
    margin: 4.5rem auto;
    width: 100%;
  }
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 848px) {
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  }
`

export const PostCard = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 848px) {
    gap: 1.25rem;
  }

  padding: 2rem;
  border-radius: 0.625rem;
  border: 2px solid transparent;
  background: ${(props) => props.theme['base-post']};
  transition: 0.3s;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const PostCardTitle = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.4;
  }

  @media (min-width: 848px) {
    line-height: 1.6;
  }

  time {
    margin-top: 0.25rem;
    font-size: 0.875rem;
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

  line-height: 1.4;
  color: ${(props) => props.theme['base-text']};
`
