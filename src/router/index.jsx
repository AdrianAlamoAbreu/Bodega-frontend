import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Root from "../layout/index.jsx";
import Vinos from "../pages/vinos/vinos.jsx";
import Adminpage from "../pages/adminpage.jsx";
import Reservas from "../pages/reservas/reservas.jsx";
import Login from "../pages/login/login.jsx";
import Bodegas from "../pages/bodegas/Bodegas.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Signup from "../pages/register/register.jsx";
import Perfil from "../pages/perfil/Perfil.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: '/vinos',
        element: <Vinos />
      },
      {
        path: '/adminpage',
        element: <Adminpage />
      },
      {
        path: '/reservas',
        element: <Reservas />
      },
      {
        path: '/bodegas',
        element: <Bodegas />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/perfil',
        element: <Perfil /> 
      }
    ],
  },
]);

export default router