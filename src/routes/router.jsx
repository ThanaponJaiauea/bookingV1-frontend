/** @format */

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "../layouts/layout"
import HomePage from "../pages/homePage"
import RoomPage from "../pages/roomPage"
import ConfirmAndPay from "../pages/confirmAndPayPage"

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

  {
    path: "/confirmAndPay",
    element: <ConfirmAndPay />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
