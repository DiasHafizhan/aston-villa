import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePages from './Pages/Home'
import ErrorPages from './Pages/404'
import NewsPages from './Pages/News'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages />,
    errorElement: <ErrorPages />
  },
  {
    path: '/news',
    element: <NewsPages />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
  </StrictMode>,
)
