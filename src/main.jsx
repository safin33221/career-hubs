import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Statices from './Components/Statices.jsx';
import Blogs from './Components/Blogs.jsx';
import JobDetails from './Components/JobDetails.jsx';
import AppliedJob from './Components/AppliedJob.jsx';
import FetureJobs from './Components/FetureJobs.jsx';


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
        element:<AppliedJob></AppliedJob>
      },
      {
        path:'/blogs',
        element:<Blogs> </Blogs>
      },{
        path:'/jobs/:id',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch("/jobs.json")
      },{
        path:'/toJobs',
        element:<FetureJobs></FetureJobs>
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
