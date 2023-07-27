import { createBrowserRouter } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

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
        element: <Post />,
      },
    ],
  },
])
