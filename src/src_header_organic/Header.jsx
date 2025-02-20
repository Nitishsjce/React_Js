import { React, useState }  from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import '../../css_organic/css_header_organic/Header.css'
import { Link } from 'react-router-dom';
import Login from '../src_header_organic/Login.jsx';

function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);
    const[isOpen, setIsOpen] = useState(false);
      // const toggleMenu = () =>{
      //   setIsOpen(!isOpen);
      // }
    
    
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
                             <button onClick={() => setIsModalOpen(true)}>Login</button>
                              {isModalOpen && <Login onClose={() => setIsModalOpen(false)} />}
                          </li>
                      </ul>
                      <div className="icon"  onClick={() => setIsOpen(!isOpen)}>
                         {isOpen ? <FaTimes /> : <FaBars />} 
                      </div>
                  </nav>
        </div>
        </header>
  )
}

export default Header