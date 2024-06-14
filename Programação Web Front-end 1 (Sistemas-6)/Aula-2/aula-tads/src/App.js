import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import SimulateApi from "./components/SimulateApi";
import ToDoList from "./pages/ToDoList";
/*


import UseEffect from "./pages/UseEffect";
*/


const router = createBrowserRouter([
  {
    path: "/",
    element: <SimulateApi/>,
  },
  {
    path: "/todolist",
    element: <ToDoList/>,
  },
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


        <RouterProvider router={router} />


    );
}

export default App;
