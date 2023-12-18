import app from './config'
import jsonpl from './postConfig'

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

const getAnUser = async () => {
    try {
      const { data } = await app.get('/users/id', {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      return data.posts
    } catch (error) {
      console.error(error)
    }
  } 

const getDashboardTweets = async () => {
  try {
    const { data } = await jsonpl.get('')
    return data
  } catch (error) {
    console.error(error)
  }
}

const queryPosts = async (id) => {
  try {
    const { data } = await jsonpl.get(`?userId=${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export {
  getAllUsers,
  getAnUser,
  queryPosts
}