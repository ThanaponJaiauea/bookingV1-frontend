/** @format */

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "../layouts/layout"
import HomePage from "../pages/homePage"
import RoomPage from "../pages/roomPage"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/room",
        element: <RoomPage />,
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
