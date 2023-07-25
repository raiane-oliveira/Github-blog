import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BlogProvider } from './contexts/BlogContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BlogProvider>
        <RouterProvider router={router} />
      </BlogProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
