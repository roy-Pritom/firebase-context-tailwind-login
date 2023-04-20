import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Componenets/Layout/Main.jsx';
import Home from './Componenets/HOme/Home';
import Register from './Componenets/Register/Register';
import Login from './Componenets/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Order from './Componenets/Order/Order';
import Profile from './Componenets/Profile/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'*',
        element:<div className='my-7 text-center font-bold text-red-600 text-2xl'>404 not found</div>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>

  </React.StrictMode>,
)
