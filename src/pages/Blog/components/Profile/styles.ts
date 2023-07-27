import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  margin: 0 1rem;
  margin-top: -3.5rem;
  position: relative;
  z-index: 999;

  border-radius: 0.625rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem 1.5rem;

  @media (min-width: 848px) {
    max-width: 1152px;
    margin: 0 auto;
    margin-top: -5.5rem;
    width: 100%;

    display: flex;
    gap: 2rem;
    align-items: end;
    padding: 2rem 2.5rem;
  }
`

export const ProfileAvatar = styled.div`
  background-color: #ccc;
  border-radius: 0.5rem;
  width: 7rem;
  height: 7rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
  }

  @media (min-width: 848px) {
    width: 9.25rem;
    height: 9.25rem;
    margin: 0;
  }
`

export const ProfileInformation = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.6;
    text-decoration: none;
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
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1.5rem;
  margin-top: 0.5rem;

  span {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.6;

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  @media (min-width: 848px) {
    margin-top: 1rem;
  }
`
