import { useEffect, useState } from "react";

const UseEffect = () => {
    const [myState, setMyState] = useState()
    const [myState2, setMyState2] = useState()

    // Atualzação do componente
    useEffect(() => {
        console.log("useEffect executado na montagem e atualização do componente");
    }, [myState, myState2])

    // Montagem do componente
    useEffect(() => {
        console.log("useEffect executado na montagem do componente");
    }, [])

    // Desmontagem do componente
    useEffect(() => {
        return () => {
            console.log("useEffect executado na desmontagem do componente");
        }
    }, [])

    const updateMyState = () => {
        setMyState("Meu novo myState");
    }

    return (
        <div>
            <button onClick={updateMyState}>Disparar useEffect</button>
        </div>
    );
}

export default UseEffect;