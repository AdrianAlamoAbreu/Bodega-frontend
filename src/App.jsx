import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { SearchContext } from './context/searchContext';
import { CartProvider } from './context/cartContext';
import config from './router';
import './App.css';
import { Login } from './pages/login/login'
import { Register } from './pages/register/register'


function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <CartProvider>
      <SearchContext.Provider value={{ searchInput, setSearchInput }}>
        <RouterProvider router={config} />
      </SearchContext.Provider>

    </CartProvider>
  );
}

export default App;


