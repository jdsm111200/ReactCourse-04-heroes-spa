import { RouterProvider } from "react-router-dom";
import { NavBar } from "./layouts/components/NavBar";
import router from "./routes/Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
