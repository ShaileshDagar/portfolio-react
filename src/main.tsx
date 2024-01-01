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
import Home from './Components/Home.tsx';
import ErrorPage from './Components/ErrorPage.tsx';
// import Navbar from './Components/Navbar.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
