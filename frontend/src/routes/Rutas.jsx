import { useRoutes } from "react-router-dom";
import Home from "../home/Page";
import GuidesPage from "../guides/Page";

const Rutas = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/guias", element: <GuidesPage /> },
  ]);

  return element;
};

export default Rutas;