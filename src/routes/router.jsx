import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/toydetails",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
