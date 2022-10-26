import { createBrowserRouter, Navigate } from "react-router-dom";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

const router = createBrowserRouter([
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
]);
export default router;
