import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icono_verde.png';
// TODO remove, this demo shouldn't need to reset the theme.

import { signup } from '../../services/authServices.js'

export default function SignupCard() {
  const defaultTheme = createTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [number_phone, setNumberPhone] = useState("");
  const handleSubmit = async (event) => {
    try{
    event.preventDefault();
    const credentials = {
        user_name: user_name,
        email: email,
        password: password,
        number_phone: number_phone
      };
      const res = await signup(credentials)
        if (result === 200) {
          navigate('/perfil')
        }
      } catch (error) {
        console.log(error)
      }
    };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 15,
            paddingBottom: 15
          }}
        >
          <img src={Logo} width={"100px"}></img>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  //autoComplete="given-name"
                  name="user_name"
                  required
                  fullWidth
                  id="user_name"
                  label="Nombre de usuario"
                  autoFocus
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  //autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                 // autoComplete="new-password"
                />
              </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repeat_password"
                  label="Repite la contraseña"
                  type="repeat_password"
                  id="repeat_password"
                  onChange={(e) => setPassword(e.target.value)}
                 // autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="number_phone"
                  label="Número de teléfono"
                  name="number_phone"
                  onChange={(e) => setNumberPhone(e.target.value)}
                  //autoComplete="Número de teléfono"
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#637E51',
                color: 'white',
                '&:hover': { backgroundColor: '#F8FFFB', color: '#637E51' }
              }}
            >
             Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./login" variant="body2">
             ¿Ya tienes una cuenta? Iniciar sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
  };