import { Link } from 'react-router-dom';
import './SimulateApi.css';
import { useEffect, useState } from "react";

const infoCampoMourao = {
    dataCriacao: '10/10/1947',
    nome: 'CAMPO MOURÃO',
    qtdHabitantes: 99000,
    universidades: ["INTEGRADO", "UTFPR", "UNESPAR", "UNICAMPO"],
}

const SimulateApi = () => {

    const [info, setInfo] = useState();
    console.log(info);
    
    //UseEffect que vai ser executando quando o componente for montado
    useEffect(() => {
        //Simulação de espera pela resposta do backend
        setTimeout(() => {
            setInfo(infoCampoMourao)
        }, 1000);
    }, []);

    return (
        <div className="container">
            <Link to="/todolist">
                Ir para a página toDoList
            </Link>
            {info ? (
            <div>
                <h3>CIDADE: {info.nome}</h3>
                <h4>CRIAÇÃO: {info.dataCriacao}</h4>
                <h4>HABITANTES: {info.qtdHabitantes}</h4>
                {/*info.universidades.map((universidade) => 
                <div>{universidade}</div>)*/}
                <h4>UNIVERSIDADES: {info.universidades.join(", ")}</h4>
            </div>
            ) : (
            <div>Carregando...</div>
            )}
        </div>
    );
}

export default SimulateApi;