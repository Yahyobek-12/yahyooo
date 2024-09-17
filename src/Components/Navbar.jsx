import { useState } from 'react';
import '../Styles/Navbar.css'
import Ylogo from '../images/logo.png'
import { navbarLinks } from '../Helper'
import { Link, NavLink } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const clickToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav className='w-full h-[70px] flex items-center md:justify-around justify-between fixed border-b-2 px-6 z-10'>
        <div className="w-[100px] flex items-center justify-between z-10">
            <img src={Ylogo} alt="logo" className='w-[60px]' />
            <Link to='/' className='text-xl font-bold' id='logo'>Yahyobek</Link>
        </div>

          <ul className="navbar hidden md:block">
            {navbarLinks.map((navbarLink, idx) => (
                <NavLink key={idx} to={navbarLink.to} className="py-[10px] px-[20px] text-gray-400 rounded-md hover:text-black">{navbarLink.label}</NavLink>
            ))}
            <Link to='https://yahyobek-12.vercel.app/' target='_blank' className='py-[10px] px-[20px] bg-gradient-to-l to-slate-200 from-white rounded-md ml-6 shadow-md hover:opacity-75'>Version 0.1</Link>
          </ul>

          <div className={`w-full h-[65vh] top-0 left-0 fixed bg-white border-b-2 shadow-lg ${toggle  ? 'block' : 'hidden px-4'}`}>
            <ul className='px-8 py-20'>
              {navbarLinks.map((navbarLink, idx) => (
                <NavLink key={idx} to={navbarLink.to} className="block py-3 px-2" onClick={clickToggle}>{navbarLink.label}</NavLink>
              ))}
              <hr className='mt-2 mb-6' />
              <Link to='' className='py-[10px] px-[30px] bg-gradient-to-l to-slate-300 from-white rounded-md shadow-md hover:opacity-75'>Version 0.1</Link>
            </ul>
          </div>

        {toggle ? <IoMdClose className='text-2xl cursor-pointer block md:hidden z-10' onClick={clickToggle} /> : <HiOutlineMenuAlt4 className='text-2xl cursor-pointer block md:hidden z-10' onClick={clickToggle} />}
    </nav>
  )
}

export default Navbar