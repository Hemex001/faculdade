import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Profile from './pages/Profile';
import List from './pages/List';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/list',
    element: <List />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
