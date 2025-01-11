import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainComponent from './Main Component/MainComponent';
import SignUp from './User/SignUp';
import SignIn from './User/SignIn';

const Routing = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <MainComponent />
        },
        {
            path:"/in",
            element:<SignUp/>
        },
        {
            path:"/login",
            element:<SignIn/>
        }

    ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Routing;