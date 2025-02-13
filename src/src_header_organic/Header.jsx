import React,  { useState }  from 'react'
import { FaBars } from "react-icons/fa6";
import '../../css_organic/css_header_organic/Header.css'

function Header() {
  
    const[isOpen, setIsOpen] = useState(false);
      const toggleMenu = () =>{
        setIsOpen(!isOpen);
      }
    
    
  return (
    <header>
    <div className='container'>
          <nav>
                      <div className='logo'>
                          <h2>Amruth Organic</h2>
                      </div>
                      <ul className={isOpen ? 'nav-link active':'nav-link'}>
                          <li>
                            <a href='Home' className='active'>Home</a>
                          </li>
                          <li>
                            <a href='About'>About</a>
                          </li>
                          <li>
                            <a href='Services'>Services</a>
                          </li>
                          <li>
                            <a href='Contact us'>Contact us</a>
                          </li>
                          <li>
                            <a  href='login'>Sign in</a>
                          </li>
                      </ul>
                      <div className="icon" onClick={toggleMenu}>
                        <FaBars />
                      </div>
                  </nav>
        </div>
        </header>
  )
}

export default Header