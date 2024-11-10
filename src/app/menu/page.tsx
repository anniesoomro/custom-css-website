import Image from "next/image";
import "../styles/menu.css";

export default function Menu() {
  return (
    <div>
      
      <main className="main">
        <h2>Our Menu</h2>
        <div className="menu-Grid">
          <div className="menu-item">
            <Image src="/salad.jpg" alt="Classic Caesar Salad" width={300} height={300} />
            <h3>Classic Caesar Salad</h3>
            <p>Fresh romaine lettuce, creamy Caesar dressing, and parmesan cheese.</p>
          </div>
          <div className="menu-item">
            <Image src="/pasta.jpg" alt="Truffle Pasta" width={300} height={300} />
            <h3>Truffle Pasta</h3>
            <p>Handcrafted pasta with a creamy truffle sauce and wild mushrooms.</p>
          </div>
           
        </div>
      </main>
      
    </div>
  );
}