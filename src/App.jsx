import { useState } from 'react'

import { RouterProvider } from 'react-router-dom'

import { SearchContext } from './context/searchContext'

import config from './router'

import './App.css'

function App() {
  const [searchInput, setSearchInput] = useState('')

  const context = { searchInput, setSearchInput }

  return (
    <>
      <SearchContext.Provider value={context}>
        <RouterProvider router={ config } />
      </SearchContext.Provider>

    </>
  )
}

export default App
