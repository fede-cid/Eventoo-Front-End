import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import { motion } from 'framer-motion';

import Estilo from './Navbar.module.css';

const Navbar = () => {

  const [ menu, setMenu ] = useState(false);

  const SVGMenu = () => menu? <AiOutlineClose /> : <AiOutlineMenu />

  return(
    <header className={Estilo.ContenedorHeader}>
      <nav className={Estilo.ContenedorNavbar}>
        <h1 className={Estilo.Titulo}>EventToo</h1>
        <div
          onClick={() => setMenu(!menu)}  
        >
          { menu
            ? <AiOutlineClose />
            : <AiOutlineMenu />
          }
        </div>
        <motion.ul
          className={Estilo.MenuItem}
          initial={{
            height: '0',
          }}
          animate={{
            height: menu? '250px': '0',
          }}
          transition={{
            duration: .3
          }}
        >
          <li>
            <NavLink to='/' onClick={() => setMenu(!menu)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/eventos' onClick={() => setMenu(!menu)}>Events</NavLink>
          </li>
      { //useState.user.length === 1 ? 
         <li>
            <NavLink to='/setting' onClick={() => setMenu(!menu)}>Setting</NavLink>
          </li>
          //: undefind
        }
          <li>
            <NavLink to='/landing' onClick={() => setMenu(!menu)}>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/login' onClick={() => setMenu(!menu)}>Login</NavLink>
          </li>
        </motion.ul>
      </nav>
    </header>
  )
};


export default Navbar;