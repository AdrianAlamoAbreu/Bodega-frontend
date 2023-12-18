<<<<<<< HEAD
import Home from "../pages/home.jsx";
import About from "../pages/About/About.jsx";
import Users from "../pages/Users.jsx";
import Root from "../layout/index.jsx";
import Vinos from "../pages/vinos.jsx";
import Adminpage from "../pages/adminpage.jsx";
import Reservas from "../pages/reservas/reservas.jsx";
import Bodegas from "../pages/bodegas/Bodegas.jsx";
import Login from "../pages/login/login.jsx";
import Cart from "../pages/Cart.jsx";
import Register from "../pages/register/register.jsx"
import { createBrowserRouter } from "react-router-dom";
=======
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Users from "../pages/Users.jsx";
import Root from "../layout/index.jsx";
import Vinos from "../pages/vinos/vinos.jsx";
import Adminpage from "../pages/Adminpage.jsx";
import Reservas from "../pages/reservas/reservas.jsx";
import Login from "../pages/login/login.jsx";
import Bodegas from "../pages/bodegas/Bodegas.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Signup from "../pages/signup.jsx";
>>>>>>> 181f4e2db459c44a2d85ca4ce813509c1a672ed3


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
        element: <Register />
      },
    ],
  },
]);

export default router