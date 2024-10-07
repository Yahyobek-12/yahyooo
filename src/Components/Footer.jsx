// Footer.js (updated component with CSS classes)

import { Link } from 'react-router-dom';
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[90px] bg-white flex items-center justify-between p-4 z-10 border-t-2 border-gray-300">
      <h1>&copy; 2024 All rights reserved</h1>
      <div className="flex items-center">
        <Link to="https://github.com/Yahyobek-12" target='_blank'>
          <FaGithub className='text-xl mx-2' />
        </Link>
        <h1 className='font-bold text-xl'>|</h1>
        <Link to="https://www.youtube.com/@yahyobek_12" target='_blank'>
          <FaYoutube className='text-xl hover:text-red-500 mx-2' />
        </Link>
        <h1 className='font-bold text-xl'>|</h1>
        <Link to="https://www.linkedin.com/in/yahyobek-ergashboyev-9899832a8/" target='_blank'>
          <FaLinkedin className='text-xl hover:text-blue-500 mx-2' />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
