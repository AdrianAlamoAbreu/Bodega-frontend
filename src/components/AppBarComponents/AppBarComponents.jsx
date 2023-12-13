import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import logo from '../../assets/icono_claro.png'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const drawerWidth = 240;
const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Vinos', path: '/vinos' },
    { name: 'Bodegas', path: '/bodegas'},
    { name: 'Reservas', path: '/reservas' }, 
  ];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding >
            <Link to={item.path}>
             <ListItemButton sx={{ textAlign: 'center' }}>
               <ListItemText primary={item.name} />
             </ListItemButton>
            </Link> 
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar component="nav" sx={{ bgcolor: '#637E51' }}>
            <Toolbar>
              {/* Menú de hamburguesa visible solo en pantallas pequeñas */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xs: 'block', sm: 'flex', xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
    
              {/* Logo centrado en pantallas pequeñas */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, justifyContent: 'center' }}>
                <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} />
              </Box>
    
              {/* Iconos de carrito y login a la derecha en pantallas pequeñas */}
              <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, ml: 'auto' }}>
                <IconButton color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircleIcon />
                </IconButton>
              </Box>

              
           {/* Logo pantallas grandes */}
              <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, justifyContent: 'left' }}>
                <img src={logo} alt="Logo" style={{ maxWidth: '130px' }} />
              </Box>
              
                    

          {/* Links de navegación centrados en pantallas grandes */}
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, flexGrow: 1, justifyContent: 'center', ml: 2, mr: 2 }}>
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} style={{ textDecoration: 'none', margin: '0 10px' }}>
                <Button sx={{ color: "#fff" }}>{item.name}</Button>
              </Link>
            ))}
          </Box>    



          {/* Botones de Login y Sign Up a la derecha en pantallas grandes */}
          <Box sx={{ flexGrow: 1, display: {xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'
 }, justifyContent: 'flex-end' }}>
    <Link to="/login" style={{ textDecoration: 'none' }}>
      <Button variant="contained" sx={{ backgroundColor: "#FFFFFF", color: "#637E51", '&:hover': { backgroundColor: "#FFF7CE" } }}>Login</Button>
    </Link>
    <Link to="/signup" style={{ textDecoration: 'none' }}>
      <Button variant="contained" sx={{ marginLeft: 1, backgroundColor: "#FFFFFF", color: "#637E51", '&:hover': { backgroundColor: "#556642" } }}>Sign Up</Button>
    </Link>
  </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

