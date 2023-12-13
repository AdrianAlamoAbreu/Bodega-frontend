import { Outlet } from "react-router-dom";

import AppBarComponents from "../components/AppBarComponents/AppBarComponents"
import Footer from '../components/Footer/Footer';


function Root () {
  return (
    <>
    <AppBarComponents />
    <Footer />
    <Outlet />
    </>
  )
}


export default Root