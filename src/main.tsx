import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Projects from './Components/Projects.tsx';
import Blog from './Components/Blog.tsx';
import './Styling/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
