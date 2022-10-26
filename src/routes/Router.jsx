import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { MarvelPage, DcPage, SearchPage, HeroePage } from "../heroes";
import { MainLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/marvel" />,
  },
]);
export default router;
