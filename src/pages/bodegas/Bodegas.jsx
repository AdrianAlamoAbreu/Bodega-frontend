import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { MasonryImageList } from '../../components/bodegascomponents/BodegasComponents';
import bodega1 from '../../assets/bodega1.png'; 
import bodega2 from '../../assets/bodega2.png';
import bodega3 from '../../assets/bodega3.png';
import mansory1v from '../../assets/mansory1v.png';
import mansory2v from '../../assets/mansory2v.png';
import mansory3v from '../../assets/mansory3v.png';
import mansory4v from '../../assets/mansory4v.png';
import mansory5v from '../../assets/mansory5v.png';
import mansory6v from '../../assets/mansory6v.png';
import mansory7v from '../../assets/mansory7v.png';
import mansory8h from '../../assets/mansory8h.png';
import mansory9h from '../../assets/mansory9h.png';
import mansory10h from '../../assets/mansory10h.png';
import mansory11h from '../../assets/mansory11h.png';
import mansory12h from '../../assets/mansory12h.png';
import './bodegas.css';
import { Link } from 'react-router-dom';


const Bodegas = () => {
  const images = [
    {img: mansory2v, title: 'Mansory 2'},
    {img: mansory8h, title: 'Mansory 8'},
    {img: mansory1v , title: 'Mansory 1'},
    {img: mansory3v, title: 'Mansory 3'},
    {img: mansory4v, title: 'Mansory 4'},
    {img: mansory9h, title: 'Mansory 9'},
    {img: mansory5v , title: 'Mansory 5'},
    {img: mansory6v, title: 'Mansory 6'},
    {img: mansory10h, title: 'Mansory 10'},
    {img: mansory11h, title: 'Mansory 11'},
    {img: mansory12h, title: 'Mansory 12'},
    {img: mansory7v, title: 'Mansory 7'}
  ];

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 10, paddingLeft:2 }}>
      <Typography variant='h2' component='h1' className='bodegas'>
        Bodegas
      </Typography>
      <Grid container spacing={2} sx={{paddingTop:8}}>
        <Grid item xs={12} md={6}>
          <Typography variant='body1' className='text'>
          Nuestras tres bodegas, cada una anclada en un entorno único, son el corazón latente detrás de nuestra exquisita gama de vinos. Desde el cálido y soleado sur, pasando por el fresco y brumoso norte, hasta las temperadas medianías, cada bodega es un mundo en sí mismo, reflejando el microclima distintivo de su ubicación.<br /> <br />
          En el sur, la intensidad del sol y la singularidad de los suelos arenosos dan vida a uvas robustas, que se traducen en vinos audaces y con un toque de dulzura. Mientras tanto, en el norte, la influencia del océano Atlántico y la brisa marina engendran uvas con sutileza y elegancia, dando lugar a vinos suaves y equilibrados. En las medianías, el clima templado y la altitud moderada permiten una maduración lenta y armoniosa de las uvas, resultando en vinos que son un perfecto equilibrio de aroma y sabor.<br /> <br />
          En 7 Castrillos, no solo nos enorgullecemos de la calidad de nuestros vinos, sino también de la experiencia única que ofrecemos a nuestros visitantes. Con tours gratuitos disponibles durante todo el año, invitamos a los amantes del vino a sumergirse en un recorrido enriquecedor por nuestras bodegas. Cada visita es una oportunidad para explorar la belleza y singularidad de nuestros viñedos, conocer los secretos de nuestra producción, y, por supuesto, disfrutar de catas que deleitarán su paladar. <br /> <br />
          Estos tours no son simplemente un paseo, son una invitación a vivir, sentir y saborear la cultura del vino en Gran Canaria.
          Al final de este viaje sensorial, esperamos que cada visitante se lleve no solo botellas de nuestro excepcional vino, sino también recuerdos inolvidables. Reserve su experiencia ahora y únase a nosotros en un viaje que va más allá del vino, un viaje que celebra la tierra, la tradición y la pasión que definen a 7 Castrillos.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <MasonryImageList images={images} />
        </Grid>
      </Grid>

      <Typography variant='h4' align='center' sx={{ paddingTop: 10, paddingBottom: 5 }}>
        Tours Gratuitos
      </Typography>

      {/* Bodega 1 */}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={6}>
          <img src={bodega1} alt='Bodega 1' style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant='h5' align='center'>
        <strong>Bodega Sur</strong>
      </Typography>
          <Typography variant='body1' className='text'>La Danza del Sol y la Arena
          En la zona sur de la isla, nuestra bodega se baña en luz solar y se beneficia de suelos arenosos que aportan un carácter especial a nuestras uvas. Aquí, el calor y la brisa suave del mar se combinan para producir vinos con notas audaces y un toque de dulzura, perfectos para los amantes de sabores intensos y memorables.<br /> <br />
          <strong>Visita Guiada y Degustación:<strong/></strong><br /> <br />
          Complemente su experiencia en la Bodega Sur con nuestro tour especial. Esta visita guiada de 1 hora le llevará a través de nuestros viñedos soleados, culminando en una degustación selecta de 2 vinos representativos y aceitunas con mojo junto a pan local. Una experiencia auténtica que fusiona el sabor y la tradición del sur de Gran Canaria.
          </Typography>
          <Box className='center-button'>
          <Button variant='contained' component={Link} to='/reservas' sx={{ backgroundColor: '#637E51', color: '#FFFFFF', '&:hover': { backgroundColor: '#F8FFFB' }, margin: '10px 0' }}>          
          Reserva
          </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Bodega 2 */}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={6}>
          <img src={bodega2} alt='Bodega 2' style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant='h5' align='center'>
        <strong>Bodega Norte</strong>
        </Typography>
          <Typography variant='body1' className='text'>El Susurro de la Brisa Marina
          Contrastando con el sur, nuestra bodega en el norte se nutre de la frescura del océano Atlántico. Este microclima más fresco y húmedo es el secreto detrás de nuestras uvas con toques más sutiles y elegantes. Los vinos que aquí se originan son suaves, con una acidez equilibrada, ideales para los paladares que buscan frescura y delicadeza.<br /> <br />
          <strong>Visita Guiada y Degustación:<strong/></strong><br /> <br />
          Descubra la frescura del norte en nuestra Bodega Norte con un tour de 1 hora. Pasee por viñedos que se mecen al ritmo del océano Atlántico y participe en una degustación que incluye 2 de nuestros vinos más elegantes, acompañados de deliciosos bocados locales. Una inmersión en la suavidad y el equilibrio que definen nuestros vinos norteños.
          </Typography>
        <Box className='center-button'>
          <Button variant='contained' component={Link} to='/reservas' sx={{ backgroundColor: '#637E51', color: '#FFFFFF', '&:hover': { backgroundColor: '#F8FFFB' }, margin: '10px 0' }}>          
          Reserva
          </Button>
         </Box>
        </Grid>
      </Grid>

      {/* Bodega 3 */}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={6}>
          <img src={bodega3} alt='Bodega 3' style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant='h5' align='center'>
        <strong>Bodega Medianías</strong>
      </Typography>
          <Typography variant='body1' className='text'>La Armonía de la Altura
          En las medianías, el clima templado y la altitud ofrecen condiciones únicas. Nuestras uvas crecen en un ambiente de temperaturas moderadas, lo que permite una maduración lenta y equilibrada. Los vinos resultantes son una expresión equilibrada de aroma y sabor, capturando la esencia de la diversidad de Gran Canaria.<br /> <br />
          <strong>Visita Guiada y Degustación:</strong><br /> <br />
          En la Bodega de Medianías, le invitamos a un recorrido de 1 hora por un paisaje vinícola de temperaturas moderadas y vistas impresionantes. Concluya su visita con una degustación exclusiva de 2 vinos, que reflejan la armonía y riqueza de las medianías, maridados con especialidades regionales. Un deleite para los sentidos que celebra la diversidad y la calidad de nuestros vinos de altura.
       </Typography>
        <Box>
          <Button variant='contained' component={Link} to='/reservas' sx={{ backgroundColor: '#637E51', color: '#FFFFFF', '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' }, margin: '10px 0' }}>          
          Reserva
          </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bodegas;