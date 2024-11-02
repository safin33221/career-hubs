import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Statices from './Components/Statices.jsx';
import Jobs from './Components/Jobs.jsx';
import Blogs from './Components/Blogs.jsx';
import JobDetails from './Components/JobDetails.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Statices></Statices>,
        loader:()=> fetch('/categories.json')
      },
      {
        path:'/appliedjobs',
        element:<Jobs></Jobs>
      },
      {
        path:'/blogs',
        element:<Blogs> </Blogs>
      },{
        path:'/jobs/:id',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch("/jobs.json")
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
