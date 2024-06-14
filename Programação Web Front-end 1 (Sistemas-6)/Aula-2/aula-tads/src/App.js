import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import List from "./pages/List";
import { ChakraProvider } from "@chakra-ui/react";
/*
import SimulateApi from "./components/SimulateApi";
import ToDoList from "./pages/ToDoList";
import UseEffect from "./pages/UseEffect";
*/


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
/*
        <div>
        <ToDoList pageTitle="Lista de Tarefas" />
        <UseEffect />
        <SimulateApi />
        </div>
*/

        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>

    );
}

export default App;
