import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About/About.jsx";
import Users from "../pages/Users.jsx";
import Root from "../layout/index.jsx";
import Vinos from "../pages/Vinos.jsx";
import Adminpage from "../pages/Adminpage.jsx";
import Reservas from "../pages/reservas/reservas.jsx";
<<<<<<< HEAD
import Bodegas from "../pages/Bodegas.jsx";
import Login from "../pages/login/login.jsx";
=======
import Bodegas from "../pages/bodegas/Bodegas.jsx";
import Login from "../pages/Login.jsx";
>>>>>>> 5372070098e3c2e4313574639bcac52d582d52ca
import Cart from "../pages/Cart.jsx";
import Signup from "../pages/signup.jsx";


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
        path: '/users',
        element: <Users />
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
    ],
  },
]);

export default router