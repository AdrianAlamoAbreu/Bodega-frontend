import app from './config'


const getOwnProfile = async () => {
  try {
    const { data } = await app.get('/user/profile', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.error(error)
  }
} 

const getAllUsers = async () => {
  try {
    const { data } = await app.get('/users', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    return data.posts
  } catch (error) {
    console.error(error)
  }
} 

const getAnUser = async (id) => {
    try {
      const { data } = await app.get(`/users/${ id }`, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      return data.posts
    } catch (error) {
      console.error(error)
    }
  } 

const getAllWines = async (id) => {
    try {
        const { data } = await app.get(`/vinos/${ id }`, {
          headers: {
            authorization: localStorage.getItem('token')
          }
        })
        return data.posts
      } catch (error) {
        console.error(error)
      }
    } 

const getWine = async (id) => {
    try {
        const { data } = await app.get(`/users/${ id }`, {
          headers: {
            authorization: localStorage.getItem('token')
          }
        })
        return data.posts
      } catch (error) {
        console.error(error)
      }
    } 

const getAllTours = async () => {
    try {
        const { data } = await app.get('/reservas', {
           headers: {
             authorization: localStorage.getItem('token')
           }
      })
         return data.posts
        } catch (error) {
          console.error(error)
        }
      } 

const getATour = async (id) => {
    try {
          const { data } = await app.get(`/reservas/${ id }`, {
           headers: {
              authorization: localStorage.getItem('token')
             }
      })
         return data.posts
          } catch (error) {
            console.error(error)
        }
      } 
const getOwnTour = async (id) => {
    try {
        const { data } = await app.get(`/reservas/${ id }`, {
            headers: {
                authorization: localStorage.getItem('token')
                }
        })
            return data.posts
            } catch (error) {
            console.error(error)
        }
    } 

const getAllOrders = async (id) => {
  try {
    const { data } = await app.get(`/reservas/${ id }`, {
      headers: {
       authorization: localStorage.getItem('token')
        }
      })
         return data.posts
         } catch (error) {
          console.error(error)
       }
  } 

  const createOrder = async () => {
    try {
      const { data } = await app.post('/pedidos', {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      return data
    } catch (error) {
      console.error(error)
   }
  }


export {
  getOwnProfile,
  getAllUsers,
  getAnUser,
  getAllWines,
  getWine,
  getAllTours,
  getATour,
  getOwnTour,
  getAllOrders,
  createOrder  
}