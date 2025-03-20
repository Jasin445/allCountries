import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { getData } from './Components/functions.tsx'
import CountryDetails from './Components/CountryDetails.tsx'
import ErrorComponent from './Components/ErrorComponent.tsx'
import Layout from './Components/Layout.tsx'
import Countries from './Components/Countries.tsx'
import { countriesData } from './Components/loc.tsx'
import DarkModeProvider from './Components/Context.tsx'
import Redirecting from './Components/Redirect.tsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Redirecting />, // Use the Redirecting component

    },
  {
    path: '/countries',
    element: <Layout/>,
    loader: countriesData,
    shouldRevalidate: () => false,
    errorElement: <ErrorComponent />,
    children: [
      {
          index: true,
          element: <Countries/>,
      },
      {
          path: ":id", 
          element: <CountryDetails />,
          loader: async ({params}) => {
            let data = await getData();
            return data.find((nation: {
              cca3: any
              name: {common: any}
      }) => nation.cca3 === params.id)
          }
      },
    ]
  },
  {
    path: '*',
    element: <ErrorComponent /> 
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
    <RouterProvider router={router}></RouterProvider>
    </DarkModeProvider>

    
  </StrictMode>,
)

