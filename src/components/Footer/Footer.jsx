import React from 'react';
import { Grid, Box, Typography, Link as MuiLink } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#637E51', color: '#FFFFFF', p: 3, textAlign: 'center',
    width: '100vw', position: 'relative', bottom: 0, left: 0 }}>
      <Grid container spacing={4}>
        {/* Columna de Contacto */}
        <Grid item xs={12} md={4}>
          <Typography className="titulo-footer" variant="h6">SÍGANOS</Typography>
          <Box>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
          <Typography className="contenido-footer" sx={{ fontSize: '1rem' }}>BODEGAS 7 CASTRILLOS</Typography>
          <Typography className="contenido-footer" sx={{ fontSize: '0.75rem' }}>c/ Las lagunetas s/n</Typography>
          <Typography className="contenido-footer" sx={{ fontSize: '0.75rem' }}>35200 El Madroñal</Typography>
          <Typography className="contenido-footer" sx={{ fontSize: '0.75rem' }}>Las Palmas - España</Typography>
          <Typography className="contenido-footer" sx={{ fontSize: '0.75rem' }}>Tlf: +34 928 884 206</Typography>
          <Typography className="contenido-footer" sx={{ fontSize: '0.75rem' }}>info@bodegas7castrillos.com</Typography>
        </Grid>

        {/* Columna de Últimas Noticias */}
        <Grid item xs={12} md={4}>
          <Typography className="titulo-footer" variant="h6">ÚLTIMAS NOTICIAS</Typography>
          <Link to="/noticia-1" className="contenido-footer-link">Noticia 1</Link>
          <Link to="/noticia-2" className="contenido-footer-link">Noticia 2</Link>
        </Grid>

        {/* Columna de Opciones */}
        <Grid item xs={12} md={4}>
          <Typography className="titulo-footer" variant="h6">PÁGINAS</Typography>
          <Link to="/" className="contenido-footer-link">Inicio</Link>
          <Link to="/About" className="contenido-footer-link">Nosotros</Link>
          <Link to="/vinos" className="contenido-footer-link">Vinos</Link>
          <Link to="/bodegas" className="contenido-footer-link">Bodegas</Link>
          <Link to="/reservas" className="contenido-footer-link">Reservas</Link>
        </Grid>
      </Grid>

      {/* Contenido Adicional Debajo de las Columnas */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography className="contenido-footer" variant="body2">Copyright © 2023 - Bodegas 7 Castrillos. Web desarrollada por Grupo 5</Typography>
        <MuiLink href="#" sx={{ color: 'white', ml: 1, fontSize: '0.75rem' }}>
          Aviso Legal
        </MuiLink>
        |
        <MuiLink href="#" sx={{ color: 'white', ml: 1, fontSize: '0.75rem' }}>
          Política de Privacidad
        </MuiLink>
        |
        <MuiLink href="#" sx={{ color: 'white', ml: 1, fontSize: '0.75rem' }}>
          Política de Cookies
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;