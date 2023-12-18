import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './Home.css';
import imagenBodega from '../../assets/bodega_home.jpg'
import viñedo from '../../assets/portada.png'
import tienda from '../../assets/tienda_enlace.png'
import equipo from '../../assets/Equipo.png'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const Home = () => {
  return (
        <Box sx={{paddingTop: 14}}>
          <img src={viñedo} alt="Viñedo" className="responsive-img" />
        <Box>
          <Typography variant='h2' component='h1' className='home'>
          Bienvenidos a la Bodega 7 Castrillos
          </Typography> 
          </Box> 
        <Grid container spacing={3} className="section">
        <Grid item xs={12} md={6}>
        <img src={imagenBodega} alt="Imagen Bodega" className="responsive-img" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" className="text">
          Los viñedos de 7 Castrillos se enorgullecen de poder ofrecer toures por todas y cada una de sus bodegas para que nuestros clientes no solo puedan conocer el proceso <br />
          mediante el cual creamos nuestros productos, sino que además puedan asegurar la calidad en todos y cada uno de los pasos para la elaboración de sus vinos.<br />
          Al final de cada tour, los visitantes pueden disfrutar de una cata de nuestra variada carta<br />
          </Typography>
          <Box className="center-button">
          <Button variant="contained" component={Link} to="/reservas" sx={{ backgroundColor: "#637E51", color: "#FFFFFF", '&:hover': { backgroundColor: "#F8FFFB", color: '#637E51' }, margin: "10px 0" }}>          
          ¿Ven conocer nuestras instalaciones?
          </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} className="section">
        <Grid item xs={12} md={6}>
          <Typography variant="body1" className="text">
        La colección de vinos de 7 Castrillos es un homenaje a la diversidad y riqueza de Gran Canaria. <br /> <br />
        Nuestra gama incluye desde tintos profundos y complejos, perfectos para acompañar una cena elegante, hasta blancos frescos y ligeros, ideales para una tarde relajada.<br /> <br />
        Descubra el carácter único de cada variedad: el vigor de un joven tempranillo, la elegancia de un añejo merlot, o la frescura de un vibrante chardonnay.<br /> <br />
        Nuestras catas gratuitas son una invitación a sumergirse en este universo de sabores. Cada visita es una oportunidad para aprender, degustar y, por supuesto, encontrar ese vino perfecto que se llevará a casa, no solo como una compra sino como una experiencia inolvidable de la riqueza vinícola de Canarias.
        </Typography>
          <Box className="center-button">
          <Button variant="contained" component={Link} to="/vinos" sx={{ backgroundColor: "#637E51", color: "#FFFFFF", '&:hover': { backgroundColor: "#F8FFFB", color: '#637E51' }, margin: "10px 0" }}>          
              Explora nuestros vinos
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={tienda} alt="Botella de vino" className="responsive-img" />
        </Grid>
      </Grid>

      <Grid container spacing={3} className="section">
        <Grid item xs={12} md={6}>
          <Typography variant="body1" className="text">
        ¿interesado en saber sobre nuestras bodegas y quienes somos?, aquí puedes encontrar toda la información que puedas necesitar.
        </Typography>
          <Box className="center-button">
          <Button variant="contained" component={Link} to="/about" sx={{ backgroundColor: "#637E51", color: "#FFFFFF", '&:hover': { backgroundColor: "#F8FFFB", color: '#637E51' }, margin: "10px 0" }}>          
              ¡Conócenos!
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={equipo} alt="Botella de vino" className="responsive-img" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;