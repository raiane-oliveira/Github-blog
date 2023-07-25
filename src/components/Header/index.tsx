import { BgEffectLeft, BgEffectRight, HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import bgEffectLeft from '../../assets/bg-effect-left.svg'
import bgEffectRight from '../../assets/bg-effect-right.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <BgEffectLeft src={bgEffectLeft} alt="" aria-hidden />
      <Link to="/">
        <img src={logo} alt="" aria-hidden />
      </Link>
      <BgEffectRight src={bgEffectRight} alt="" aria-hidden />
    </HeaderContainer>
  )
}
