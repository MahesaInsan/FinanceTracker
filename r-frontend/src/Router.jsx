import {createBrowserRouter} from 'react-router-dom'
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import NotFound from './views/NotFound'
import DefaultLayout from './components/DefaultLayout'
import GuestLayout from './components/GuestLayout'
import Dashboard from './views/Dashboard'
import Students from './views/Students'
import Expence from './components/expence/Expence';
import CreateExpences from './components/expence/CreateExpence';

const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout/>,
        children:[
            {
                path: '/',
                element: <Navigate to='/users'/>
            },
            {
                path:'/dashboard',
                element: <Dashboard/>
            },
            {
                path:'/users',
                element: <Users/>
            }
        ]
    },
    {
        path:'/',
        element: <GuestLayout/>,
        children:[
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element: <Signup/>
            }
        ]
    },
    {
        path:'/students',
        element:<Students/>
    },
    {
      path: '/expences',
      element: <Expence/>,
      children:[
        {
          path:'/expences/create',
          element: <CreateExpences/>
        }
      ]
    },
    {
        path:'*',
        element: <NotFound/>
    }
])

export default router;
