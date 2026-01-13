import { useRoutes } from "react-router-dom";
import Home from "../home/Page";

const Rutas = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
  ]);

  return element;
};

export default Rutas;