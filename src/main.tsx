import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"
import { getData } from './Components/functions.tsx'
import CountryDetails from './Components/CountryDetails.tsx'
import ErrorComponent from './Components/ErrorComponent.tsx'
import Layout from './Components/Layout.tsx'
import Countries from './Components/Countries.tsx'
import { countriesData } from './Components/loc.tsx'
import DarkModeProvider from './Components/Context.tsx'

const router = createBrowserRouter(
  [
    // {
    //   path: '/',
    //   element: <Redirecting />, // Use the Redirecting component

    // },
  {
    path: '/',
    element: <Layout/>,
    loader: countriesData,
    errorElement: <ErrorComponent />,
    children: [
      {
          index: true,
          element: <Navigate to={'/countries'} replace/>,
      },
      {

          path: '/countries',
          element: <Countries/>,
      },
      {
          path: "/countries/:id", 
          element: <CountryDetails />,
          loader: async ({params}) => {
            let data = await getData();
            const spec = data.find((nation: {
              cca3: any
              name: {common: any}
      }) => nation.cca3 === params.id)
        return spec;
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
    <RouterProvider router={router} />
    </DarkModeProvider>
  </StrictMode>,
)

