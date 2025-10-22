import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home</h1>
    },
    {
        path: "/toydetails",
        element: <h1>Toy Details</h1>
    }
])

export default router;