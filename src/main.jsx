import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Statices from './Components/Statices.jsx';
import Jobs from './Components/Jobs.jsx';
import Blogs from './Components/Blogs.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Statices></Statices>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'/blogs',
        element:<Blogs> </Blogs>
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
