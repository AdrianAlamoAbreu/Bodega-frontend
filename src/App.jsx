import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { SearchContext } from './context/searchContext';
import { CartProvider } from './context/cartContext';
import config from './router';
import './App.css';


<<<<<<< HEAD
import { SearchContext } from './context/searchContext'

import config from './router'

import Register  from './pages/register/register'

import './App.css'
=======
>>>>>>> 181f4e2db459c44a2d85ca4ce813509c1a672ed3

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <CartProvider>
      <SearchContext.Provider value={{ searchInput, setSearchInput }}>
        <RouterProvider router={config} />
      </SearchContext.Provider>
<<<<<<< HEAD
    </>
  )
=======

    </CartProvider>
  );
>>>>>>> 181f4e2db459c44a2d85ca4ce813509c1a672ed3
}

export default App;


