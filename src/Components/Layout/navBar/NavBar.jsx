import CartWidget from "../../Common/cartWidget/CartWidget";
import "../../Layout/navBar/NavBar.css";
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className={"containerNavbar"}>
     
        <Link to="/">
          <img src="https://res.cloudinary.com/diwok5a0s/image/upload/v1695765331/Logo_PMQZ4_50X50_uryjfh.png"/>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Ecommerce</li>
          </Link>
          <Link to="/category/Servicios">
            <li>Servicios</li>
          </Link>
          <Link to="/category/Productos">
            <li>Productos</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
  
    </>
  );
};
