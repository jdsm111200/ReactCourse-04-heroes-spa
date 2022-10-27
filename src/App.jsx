import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider";
import router from "./routes/Router";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
