import React, { useEffect, useState } from "react"
import nearme from '../../images/header_image/near_me.jpg'
import '../../css_organic/css_header_organic/Header.css'
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


function Header() {
  // const [raindrops, setRaindrops] = useState([]);

  // useEffect(() => {
  //   const drops = Array.from({ length: 50 }, (_, i) => ({
  //     id: i,
  //     left: `${Math.random() * 100}%`,
  //     animationDelay: `${Math.random() * 1.5}s`,
  //   }));
  //   setRaindrops(drops);
  // }, []);


  return (
    <header>
    <nav className="navbar" style={{justifyContent: 'space-evenly' }}>
     {/* {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="raindrop"
          style={{ left: drop.left, animationDelay: drop.animationDelay }}
        ></div>
      ))} */}
      <div className="logo" >Amruth Organic</div>
      <div className="location">
        <FaMapMarkerAlt /> <span>Set Location</span> <IoMdArrowDropdown />
      </div>
      <div className="near-me">
        <img src= {nearme} alt="Near me" className="icon" />
        <span>Near me</span>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Search"></input>
         <FaSearch
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
         />
      </div>
      <div className="language">
        EN <IoMdArrowDropdown />
      </div>
      <button className="home">Home</button>
      <div className="menu-items">
        <FaShoppingCart className="cart-icon" /> <span>Cart</span>
      </div>
      <button className="login">Login</button>

    </nav>
  </header>
  )
}

export default Header