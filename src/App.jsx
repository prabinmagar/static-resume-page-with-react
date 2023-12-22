// Application CSS
import "./assets/sass/style.scss";
// react route rdom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home/HomeScreen";
import Error from "./screens/error/ErrorScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
