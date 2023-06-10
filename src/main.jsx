import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Authprovider from './provider/Authprovider.jsx';
import SignUp from './pages/SignUp.jsx';
import Classes from './pages/Classes.jsx';
import UserPrivateRoute from './provider/UserPrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
         path: "class",
         element: <UserPrivateRoute><Classes></Classes></UserPrivateRoute>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <div className='m-container'>
    <RouterProvider router={router} />
    </div>
    </Authprovider>
  </React.StrictMode>,
  
)
