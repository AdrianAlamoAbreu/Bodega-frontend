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
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import logo from '../../assets/icono_claro.png'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const drawerWidth = 240; /*ancho menú desplegable*/
const navItems = [        /*rutas*/
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Vinos', path: '/vinos' },
    { name: 'Bodegas', path: '/bodegas'},
    { name: 'Reservas', path: '/reservas' }, 
  ];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false); /*visibilidad del menú desplegable en dispositivos móviles*/

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);     /*alterna el estado de mobileOpen*/
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={logo} alt='Logo' style={{ maxWidth: '100px' }} />
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
          <AppBar component='nav' sx={{ bgcolor: '#637E51' }}>
            <Toolbar>
              {/* Burger menu solo en pantallas pequeñas */}
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xs: 'block', sm: 'flex', xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
    
              {/* Logo centrado en pantallas pequeñas */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, justifyContent: 'center' }}>
                <img src={logo} alt='Logo' style={{ maxWidth: '100px' }} />
              </Box>
    
              {/* Iconos de carrito y login a la derecha en pantallas pequeñas */}
              <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }, ml: 'auto' }}>
                <IconButton component={Link} to='/Cart' color='inherit'>
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton color='inherit'>
                  <AccountCircleIcon />
                </IconButton>
              </Box>

              
           {/* Logo pantallas grandes */}
              <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, justifyContent: 'left', paddingLeft:5 }}>
                <img src={logo} alt='Logo' style={{ maxWidth: '130px' }} />
              </Box>
              
                    

          {/* Links de navegación a páginas centrados en pantallas grandes */}
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, width: 0, flexGrow: 3, justifyContent: 'space-between', ml: 20, mr: 10 }}>
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} style={{ textDecoration: 'none', margin: '0 10px' }}>
                <Button sx={{ color: '#ffffff' }}>{item.name}</Button>
              </Link>
            ))}
          </Box>    


          {/*carrito*/}
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, ml: '30rem' }}>
                <IconButton component={Link} to='/Cart' sx={{ color: '#FFFFFF', '&:hover': { color: '#435636' } }}>
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
              



          {/* Botones de Login y Sign Up a la derecha en pantallas grandes */}
          <Box sx={{ flexGrow: 1, display: {xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'
 }, justifyContent: 'flex-end' }}>
    <Link to='/login' style={{ textDecoration: 'none' }}>
      <Button variant='contained' sx={{ backgroundColor: '#FFFFFF', color: '#637E51', '&:hover': { backgroundColor: '#556642', color: '#FFFFFF' } }}>Login</Button>
    </Link>
    <Link to='/signup' style={{ textDecoration: 'none' }}>
      <Button variant='contained' sx={{ marginLeft: 1, backgroundColor: '#FFFFFF', color: '#637E51', '&:hover': { backgroundColor: '#556642', color: '#FFFFFF' } }}>Sign Up</Button>
    </Link>
  </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
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

  window: PropTypes.func,
};

export default DrawerAppBar;

