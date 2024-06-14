import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/profile">Ir para Profile</Link>
            <br />
            <Link to="/list">Ir para List</Link>
        </div>
    );
}

export default Home;