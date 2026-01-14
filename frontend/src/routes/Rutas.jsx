import { useRoutes } from "react-router-dom";
import Home from "../home/HomePage";
import GuidesPage from "../guides/GuidesPage";

const Rutas = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/guias", element: <GuidesPage /> },
  ]);

  return element;
};

export default Rutas;