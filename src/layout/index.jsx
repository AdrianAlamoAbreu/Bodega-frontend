import { Outlet } from "react-router-dom";

import AppBarComponents from "../components/AppBarComponents/AppBarComponents"

function Root () {
  return (
    <>
    <AppBarComponents />
    <Outlet />
    </>
  )
}


export default Root