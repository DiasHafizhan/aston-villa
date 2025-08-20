import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePages from './Pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages />
  },
  {
    path: '/news',
    element: <div>News</div>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
  </StrictMode>,
)
