import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
// import usestate from "react";

function Header() {
  //   const [openMenu, setOpenMenu] = usestate(false);
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <span>HND</span>
        </div>
        <div className={`all flex ${!open ? "close" : ""}`}>
          <nav>
            <ul className="nav-lists flex">
              <li className="list">
                <NavLink to="home">Home</NavLink>
              </li>
              <li className="list">
                <NavLink to="info">Information</NavLink>
              </li>
              <li className="list">
                <NavLink to="gallery">Gallery</NavLink>
              </li>
              <li className="list">
                <NavLink to="cities ">Cities</NavLink>
              </li>
              <li className="list">
                <NavLink to="works">Works</NavLink>
              </li>
            </ul>
          </nav>
          <div className="right flex-items">
            <span style={{ cursor: "pointer" }}>
              <FaShoppingCart />
            </span>

            <button className="btn-primary">
              <NavLink to="login">Login</NavLink>
            </button>
          </div>
        </div>
      </div>
      <span className="menu">
        {!open ? (
          <GiHamburgerMenu onClick={() => setOpen((open) => !open)} />
        ) : (
          <IoMdClose onClick={() => setOpen((open) => !open)} />
        )}
      </span>
    </header>
  );
}

export default Header;
