import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './About.css';
import bodegaImagen from '../../assets/bodega.jpg'
import viñedo from '../../assets/viñedo.jpg'
import botellavino from '../../assets/botellavino.jpg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
        <Box className='about-container'>
          <Typography variant='h2' component='h1' className='sobrenosotros'>
            Sobre Nosotros
          </Typography>    
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant='body1' className='text'>
          En el corazón vibrante de Gran Canaria, se erige 7 Castrillos, no solo como una bodega sino como un testimonio viviente de una tradición familiar.<br /><br />
          Fundada por los hermanos Castrillo, cuya infancia estuvo inmersa entre viñedos y sueños de vendimias, la bodega es un espejo del amor y la dedicación a la tierra. 
          Cada rincón de nuestras instalaciones cuenta la historia de una familia que, aunque diversa en profesiones, encontró una pasión común en el arte de la vinicultura.<br /> <br />
          La historia de 7 Castrillos es una narrativa de transformación, de cómo un grupo de hermanos convirtieron sus recuerdos de infancia en una empresa que hoy se enorgullece de formar parte del prestigioso linaje de los vinos canarios.<br /><br /> 
          Aquí, cada botella no es solo un producto; es un pedazo de historia, un legado que se saborea y se celebra con cada copa.
          </Typography>
          <Box className='center-button'>
          <Button variant='contained' component={Link} to='/bodegas' sx={{ backgroundColor: '#637E51', color: '#FFFFFF', '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' }, margin: '10px 0' }}>          
          Conoce nuestras bodegas
          </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={bodegaImagen} alt='Imagen Bodega' className='responsive-img' />
        </Grid>
      </Grid>

      <Grid container spacing={3} className='section'>
        <Grid item xs={12} md={6}>
          <img src={viñedo} alt='Viñedo' className='responsive-img' />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='body1' className='text'>
          Los viñedos de 7 Castrillos son un tapiz de variedades, repartidos estratégicamente por toda la isla para capturar la esencia única de cada terruño.<br /> <br /> 
          La diversidad de microclimas y suelos de Gran Canaria se refleja en nuestras uvas, que maduran bajo un sol generoso y una brisa marina refrescante. <br /> <br />
          Nuestro proceso de producción es un delicado equilibrio entre respeto a las tradiciones y adopción de innovaciones tecnológicas. <br /> <br />
          Cada uva es seleccionada con esmero, y el proceso de fermentación se supervisa minuciosamente para garantizar la calidad suprema de nuestros vinos. <br /> <br />
          Con orgullo, ofrecemos vinos con denominación de origen, cada uno contando la historia de su origen, desde la vendimia hasta la botella.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} className='section'>
        <Grid item xs={12} md={6}>
          <Typography variant='body1' className='text'>
        La colección de vinos de 7 Castrillos es un homenaje a la diversidad y riqueza de Gran Canaria. <br /> <br />
        Nuestra gama incluye desde tintos profundos y complejos, perfectos para acompañar una cena elegante, hasta blancos frescos y ligeros, ideales para una tarde relajada.<br /> <br />
        Descubra el carácter único de cada variedad: el vigor de un joven tempranillo, la elegancia de un añejo merlot, o la frescura de un vibrante chardonnay.<br /> <br />
        Nuestras catas gratuitas son una invitación a sumergirse en este universo de sabores. Cada visita es una oportunidad para aprender, degustar y, por supuesto, encontrar ese vino perfecto que se llevará a casa, no solo como una compra sino como una experiencia inolvidable de la riqueza vinícola de Canarias.
        </Typography>
          <Box className='center-button'>
          <Button variant='contained' component={Link} to='/vinos' sx={{ backgroundColor: '#637E51', color: '#FFFFFF', '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' }, margin: '10px 0' }}>          
              Explora nuestros vinos
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={botellavino} alt='Botella de vino' className='responsive-img' />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;