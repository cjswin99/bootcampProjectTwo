import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import LandingPage from './pages/LandingPage.tsx'
import ParkPage from './pages/ParkPage.tsx'
import WeatherPage from './pages/WeatherPage.tsx'
import CheckoutPage from './pages/CheckoutPage.tsx'
{/*import ProductPage from './pages/ProductPage.tsx'*/}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage/>
      }, 
      {
        path: "/ParkPage",
        element: <ParkPage />
      },
      {
        path: "/WeatherPage",
        element: <WeatherPage />
      },
      {
        path: "/CheckoutPage",
        element: <CheckoutPage />
      },
      
      {/*
        path: "/products",
        element: <ProductPage />
      */}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
  
)
