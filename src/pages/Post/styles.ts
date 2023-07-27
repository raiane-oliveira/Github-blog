import { styled } from 'styled-components'

export const PostContainer = styled.main`
  @media (min-width: 848px) {
    max-width: 1152px;
    margin: 0 auto;
    width: 100%;
  }
`

export const PostInfo = styled.div`
  margin: 0 1rem;
  margin-top: -4rem;
  position: relative;
  z-index: 9999;

  padding: 2rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 700;
  }

  @media (min-width: 848px) {
    margin-top: -5.5rem;
  }
`

export const LinksPostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: 0.3s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }

    span {
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.6;
    }
  }
`

export const SmallInfoPost = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  margin-top: 0.5rem;

  color: ${(props) => props.theme['base-span']};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};

      width: 1.125rem;
      height: 1.125rem;
    }

    span {
      line-height: 1.6;
    }
  }
`

export const ContentPost = styled.article`
  padding: 2.5rem 2rem;
  white-space: pre-wrap;

  img {
    display: block;
    max-width: 100%;
  }

  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;

  a {
    color: ${(props) => props.theme.blue};
  }

  pre div:first-child {
    background: ${(props) => props.theme['base-post']} !important;
  }

  code {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    padding: 1rem 0.5rem;

    &::-webkit-scrollbar {
      height: 6px;
      background: ${(props) => props.theme['base-label']};
      border-radius: 999px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 999px;
      background: ${(props) => props.theme['base-border']};
      touch-action: pan-x;
    }
  }
`
