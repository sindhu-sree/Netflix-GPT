import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Body from './Body';
import Login from './Login';
import Browse from './Browse';

const Routing = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Body />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
            path:"/Browse",
            element:<Browse/>
        },

    ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Routing;