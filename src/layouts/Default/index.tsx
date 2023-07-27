import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Loader, LoaderContainer } from './styles'

export function Default() {
  const navigation = useNavigation()

  return (
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration />
      {navigation.state === 'loading' && (
        <LoaderContainer>
          <div>
            <Loader />
          </div>
        </LoaderContainer>
      )}
    </div>
  )
}
