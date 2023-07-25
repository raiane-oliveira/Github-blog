import { createBrowserRouter } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Blog } from './pages/Blog'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
      {
        path: '/post/:id',
        element: <div>Post</div>,
      },
    ],
  },
])
