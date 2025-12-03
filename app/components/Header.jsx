import { Link } from "react-router";

const Header = () => {
    return (
        <nav>
            <h2>Guy Luong</h2>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/projects"}>Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;