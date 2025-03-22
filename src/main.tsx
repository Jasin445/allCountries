import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider, defer } from "react-router-dom"
import { getData } from './Components/functions.tsx'
import CountryDetails from './Components/CountryDetails.tsx'
import ErrorComponent from './Components/ErrorComponent.tsx'
import Layout from './Components/Layout.tsx'
import Countries from './Components/Countries.tsx'
import { countriesData } from './Components/loc.tsx'
import DarkModeProvider from './Components/Context.tsx'
import { Provider } from 'react-redux'
import store from './Components/store/index.tsx'

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
          element: <Navigate to={'/countries'} />,
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
        console.log(spec)
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
      <Provider store={store}>
    <DarkModeProvider>
    <RouterProvider router={router} />
    </DarkModeProvider>
      </Provider>

    
  </StrictMode>,
)

