import app from "./config"

const login = async (body) => {
  try {
    const { data } = await app.post('/auth/login', body)
    localStorage.setItem('token', data.token)
    return 200
  } catch (error) {
    console.log(error.message)
  }
}

const logout = () => {
  // Elimina el token del almacenamiento local al cerrar sesión
  localStorage.removeItem('token');
  console.log("Sesión cerrada exitosamente.");
}

export {
  login,
  logout
}