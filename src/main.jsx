import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Offers from './components/Offers.jsx'
import Help from './components/Help.jsx'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'
import Cart from './components/Cart.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/offers",
                element: <Offers />
            },
            {
                path: "/help",
                element: <Help/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetails/>
            }
            
        ]
    },
    
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
