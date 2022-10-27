import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { MarvelPage, DcPage, SearchPage, HeroePage } from "../heroes";
import { MainLayout } from "../layouts";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/marvel" />,
      },
      {
        path: "/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/dc",
        element: <DcPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/hero/:heroId",
        element: <HeroePage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />,
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/marvel" />,
  },
]);
export default router;
