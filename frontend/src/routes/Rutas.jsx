import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Rutas = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
  ]);

  return element;
};

export default Rutas;