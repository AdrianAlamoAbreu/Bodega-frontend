import { useContext } from 'react'

import { SearchContext } from '../context/searchContext'

const Home = () => {
  const { searchInput } = useContext(SearchContext)
  return (
    <>
      {searchInput}
    </>
  )
}

export default Home