import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTourists from "../pages/AddTourists/AddTourists";
import MyList from "../pages/MyList/MyList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ViewDetails from "../components/PopularSpot/ViewDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/touristSpot"),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/touristSpot/${params.id}`),
      },
      {
        path: "/allTourists",
        element: <AllTouristsSpot />,
      },
      {
        path: "/addTourists",
        element: (
          <PrivateRoute>
            <AddTourists />
          </PrivateRoute>
        ),
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
