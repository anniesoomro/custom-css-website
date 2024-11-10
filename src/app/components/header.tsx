
import Link from 'next/link';
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">The Food Embassy</h1>
      <nav>
        <ul className="navList">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;