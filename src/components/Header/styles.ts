import { css, styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: grid;
  justify-content: center;
  padding: 2.5rem 0;
  height: 15rem;
  background: ${(props) =>
    css`linear-gradient(to bottom, ${props.theme['base-profile']}, rgba(20, 88, 156, .1), rgba(21, 98, 175, 0.2),  rgba(20, 88, 156, .1))`};
  position: relative;
  overflow-x: hidden;

  @media (min-width: 848px) {
    height: 18.5rem;
    padding: 4rem 0;
  }
`

const BaseBgEffect = styled.img`
  display: block;
  height: 10rem;
  width: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  object-fit: cover;

  @media (min-width: 848px) {
    width: 25.5625rem;
    height: 11.75rem;
    object-fit: contain;
  }
`

export const BgEffectLeft = styled(BaseBgEffect)`
  left: -1rem;

  @media (min-width: 848px) {
    left: 0;
  }
`

export const BgEffectRight = styled(BaseBgEffect)`
  right: -1rem;

  @media (min-width: 848px) {
    right: -4rem;
  }
`
