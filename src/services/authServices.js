import app from "./config"

const login = async (body) => {
  try {
    console.log(body)
    const { data } = await app.post('/auth/login', body)
    localStorage.setItem('token', data.token)
    return 200
  } catch (error) {
    console.log(error.message)
  }
}

const logout = () => {
  try {
    localStorage.removeItem('token');
    console.log("Sesión cerrada con éxito");
  } catch (error) {
    console.log(error.message);
  }
}


export {
  login,
  logout
}