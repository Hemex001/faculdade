import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import List from './pages/List';

function App() {

  const router = createBrowserRouter([
      {
      path: '/',
      element: <Login />
      },
      {
      path: '/login',
      element: <Login />
      },
      {
        path: '/list',
        element: <List />
      }
    ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


