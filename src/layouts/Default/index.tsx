import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from '../../components/Header'

export function Default() {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </div>
  )
}
