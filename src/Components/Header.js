import Link from "./Link";
import Title from "./Title";
import Socials from "./Socials";

const Header = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <Title order={1}>Guy Luong</Title>
      </Link>
      <div className="links">
        <Link href="/creations">Creations</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Socials />
      </div>
    </nav >
  );
}

export default Header;
