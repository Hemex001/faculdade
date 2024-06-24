import './Header.css';

const Header = ({ title }) => {
    return (
        <header class="header">
            <h1>{title}</h1>
        </header>
    );
}

export default Header;