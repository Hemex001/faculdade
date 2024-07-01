import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CurrentWeatherPage from './pages/CurrentWeatherPage';
import ForecastPage from './pages/ForecastPage';
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <CurrentWeatherPage />
    },
    {
      path: '/forecast',
      element: <ForecastPage />
    }
  ]);

  return (
    <ChakraProvider>
        <div className="App">
          <header className="App-header">
            <h1>Bem vindo ao App de Previsão do Tempo</h1>
          </header>
            <RouterProvider router={router} />
        </div>
      </ChakraProvider>
  );
}

export default App;