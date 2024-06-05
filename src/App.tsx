import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Layout/Home'
import Menu, { loaderMenu } from './Layout/Menu'
import Orders from './Layout/Orders'
import CreateOrder from './components/CreateOrder'
import Order, { LoaderOrder } from './components/Order'
import Error from './components/Error'
import Cart from './components/Cart'

function App() {
  

  const router = createBrowserRouter([
    {
      element:<Layout/>,
      errorElement:<Error/>,
      children:[
        {
          element:<Home/>,
          path:'/',
        },

        {
          element:<Menu/>,
          path:'/menu',
          loader:loaderMenu
        },
        {
          element:<Orders/>,
          path:'/orders'
        },
        {
          element:<Cart/>,
          path:'/cart'
        },
        {
          element:<CreateOrder/>,
          path:'/order/new'
        },
        {
          element:<Order/>,
          path:'/order/:id',
          loader:LoaderOrder
        },
      ]
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
