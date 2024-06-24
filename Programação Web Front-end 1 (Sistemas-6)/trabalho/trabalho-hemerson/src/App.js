import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import DigimonList from './pages/DigimonList';
import DigimonDetails from './pages/DigimonDetails';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login onLogin={handleLogin} />
    },
    {
      path: '/digimon',
      element: isLoggedIn ? <DigimonList /> : <Login onLogin={handleLogin} />
    },
    {
      path: '/digimon/:name',
      element: isLoggedIn ? <DigimonDetails /> : <Login onLogin={handleLogin} />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
