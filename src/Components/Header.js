import Title from "./Title";
import Socials from "./Socials";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <Title order={1}>Guy Luong</Title>
      </Link>
      <div className="links">
        <Link to="/creations">Creations</Link>
        <Link to="/create">Create</Link>
        <Link to="/contact">Contact</Link>
        <Socials />
      </div>
    </nav >
  );
}

export default Header;
