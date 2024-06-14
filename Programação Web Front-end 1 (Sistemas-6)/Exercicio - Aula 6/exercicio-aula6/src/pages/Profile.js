import React from 'react';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Profile:</h1>
            <p>Nome: Hemerson da Costa Lacovic</p>
            <p>E-mail: hemersonlacovic@hotmail.com</p>
            <p>Idade: 28</p>

            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}

export default Profile;