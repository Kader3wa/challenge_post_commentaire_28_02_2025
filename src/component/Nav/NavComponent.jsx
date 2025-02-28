import { Link } from "react-router";
import './NavComponent.css';

const NavComponent = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-post">Ajouter un post</Link></li>
            </ul>
        </nav>
    );
}

export default NavComponent;