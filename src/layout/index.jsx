import React from 'react';
import { Outlet } from "react-router-dom";
import AppBarComponents from "../components/AppBarComponents/AppBarComponents";
import Footer from '../components/Footer/Footer';
import Box from '@mui/material/Box';

function Root() {
  return (
    <>
      <AppBarComponents />
      <Box sx={{ flexGrow: 1 }} >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Root