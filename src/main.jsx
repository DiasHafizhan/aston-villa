import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePages from './Pages/Home'
import ErrorPages from './Pages/404'
import NewsPages from './Pages/News'
import TicketsPages from './Pages/Tickets'
import MatchesPages from './Pages/Matches'

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
  {
    path: '/tickets',
    element: <TicketsPages />
  },
  {
    path: '/matches',
    element: <MatchesPages />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
  </StrictMode>,
)
