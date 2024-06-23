import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTourists from "../pages/AddTourists/AddTourists";
import MyList from "../pages/MyList/MyList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allTourists",
        element: <AllTouristsSpot />,
      },
      {
        path: "/addTourists",
        element: <AddTourists />,
      },
      {
        path: "/myList",
        element: <MyList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
