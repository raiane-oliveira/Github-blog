import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: grid;
  justify-content: center;
  padding: 2.5rem 0;
  height: 15rem;
  background: ${(props) => props.theme['base-profile']};
  position: relative;
  overflow-x: hidden;
`

const BaseBgEffect = styled.img`
  display: block;
  height: 10rem;
  width: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  object-fit: cover;
`

export const BgEffectLeft = styled(BaseBgEffect)`
  left: -1rem;
`

export const BgEffectRight = styled(BaseBgEffect)`
  right: -1rem;
`
