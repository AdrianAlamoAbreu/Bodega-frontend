import React, { useState, useEffect } from 'react';
import { Box, ButtonGroup, Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useCart } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import blanco1 from '../../assets/blanco1.png';
import blanco2 from '../../assets/blanco2.png';
import blanco3 from '../../assets/blanco3.png';
import blanco4 from '../../assets/blanco4.png';
import tinto1 from '../../assets/tinto1.png';
import tinto2 from '../../assets/tinto2.png';
import tinto3 from '../../assets/tinto3.png';
import tinto4 from '../../assets/tinto4.png';
import './vinos.css';

const Vinos = () => {
  const [vino, setVino] = useState([]);
  const [tipoVino, setTipoVino] = React.useState('todos');
  const { anadirCarrito } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVinos = async () => {
      const data = await getAllWines();
      setVinos(data);
    };

    fetchVinos();
  }, []);



  const vinos = {
    todos: [
      { id: 1, imagen: blanco1, nombre: 'Listán blanco', precio: 15 },
      { id: 2, imagen: blanco2, nombre: 'Malvasía Volcánica', precio: 25 },
      { id: 3, imagen: blanco3, nombre: 'Vijariego Blanco', precio: 30 },
      { id: 4, imagen: blanco4, nombre: 'Albillo Criollo', precio: 22 },
      { id: 5, imagen: tinto1, nombre: 'Listán Negro', precio: 18 },
      { id: 6, imagen: tinto2, nombre: 'Tempranillo', precio: 25 },
      { id: 7, imagen: tinto3, nombre: 'Tintilla', precio: 35 },
      { id: 8, imagen: tinto4, nombre: 'Syrah', precio: 28 }
    ],
    blancos: [
      { id: 1, imagen: blanco1, nombre: 'Listán blanco', descripcion: 'Descripción 1', precio: 15  },
      { id: 2, imagen: blanco2, nombre: 'Malvasía Volcánica', descripcion: 'Descripción 2', precio: 25 },
      { id: 3, imagen: blanco3, nombre: 'Vijariego Blanco', descripcion: 'Descripción 3', precio: 30 },
      { id: 4, imagen: blanco4, nombre: 'Albillo Criollo', descripcion: 'Descripción 4', precio: 22 },
    ],
    tintos: [
      { id: 5, imagen: tinto1, nombre: 'Listán Negro', descripcion: 'Descripción 5', precio: 18 },
      { id: 6, imagen: tinto2, nombre: 'Tempranillo', descripcion: 'Descripción 6', precio: 25 },
      { id: 7, imagen: tinto3, nombre: 'Tintilla', descripcion: 'Descripción 7', precio: 35 },
      { id: 8, imagen: tinto4, nombre: 'Syrah', descripcion: 'Descripción 8', precio: 28 }
    ]
  };

  const addToCart = (vino) => {
    anadirCarrito(vino, 1);
    navigate('/cart'); /*lleva a carrito cuando se da a añadir*/
  }; /*Se llama cuando se hace clic en el botón de añadir de una tarjeta de vino, y añade el vino seleccionado con imagen e información al carrito*/

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center', paddingBottom: 10, paddingLeft: 4,  }}>
      <Typography variant='h2' component='h1' className='vinos'>
        Nuestros Vinos
      </Typography>
      <Grid sx= {{ paddingRight: 7}}>
      <ButtonGroup variant='contained' >
        <Button color='secondary' sx={{ backgroundColor: '#637E51', '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' }}} onClick={() => setTipoVino('todos')}>Todos</Button>
        <Button color='secondary' sx={{ backgroundColor: '#637E51', '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' }}} onClick={() => setTipoVino('blancos')}>Blancos</Button>
        <Button color='secondary' sx={{ backgroundColor: '#637E51', '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' }}} onClick={() => setTipoVino('tintos')}>Tintos</Button>
      </ButtonGroup>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
        {vinos[tipoVino].map((vino, index) => ( /*renderiza la lista de vinos*/
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ width: '18rem', height: '28rem', padding: 2, border: '1px solid #e0e0e0', boxShadow: 1 }}>
              <CardMedia component='img' image={vino.imagen} alt={vino.nombre} sx={{ height: '60%', objectFit: 'contain' }} />
              <CardContent>
                <Typography variant='h5' component='div'>{vino.nombre}</Typography>
                <Typography variant='h6' sx={{ mt: 2 }}>Precio: {vino.precio}€</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }} >
                <Button variant='contained' color='primary' onClick={() => addToCart(vino)} sx={{ backgroundColor: '#637E51', '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' }}}>
                  Añadir
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Vinos;