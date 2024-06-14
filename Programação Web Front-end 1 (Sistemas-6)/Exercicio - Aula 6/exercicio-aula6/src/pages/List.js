import React from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>List</h1>
            <ul>
                <li>Hobbies: Jogar, Programar, Cantar</li>
                <li>Comida Favorita: Costela</li>
                <li>Jogo favorito: MU Online</li>
            </ul>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}

export default List;