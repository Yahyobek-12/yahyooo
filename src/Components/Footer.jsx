import { Link } from 'react-router-dom'
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[100%] h-[90px] bg-white ss:flex block items-center justify-between ss:py-2 px-8 ss:text-start text-center py-4 z-10">
        <h1>&copy; 2024 All right reserved</h1>
        <div className='ss:w-[100px] w-[100%] ss:mt-0 mt-4 flex items-center justify-center'>
          <div className='flex items-center'>
            <Link to="https://github.com/Yahyobek-12" target='_blank'><FaGithub className='text-xl ml-2 mr-2' /></Link>
            <h1 className='font-bold text-xl'>|</h1>
            <Link to="https://www.youtube.com/@yahyobek_12" target='_blank'><FaYoutube className='text-xl hover:text-red-500 ml-2 mr-2' /></Link>
            <h1 className='font-bold text-xl'>|</h1>
            <Link to="https://www.linkedin.com/in/yahyobek-ergashboyev-9899832a8/" target='_blank'><FaLinkedin className='text-xl hover:text-blue-500 ml-2 mr-2' /></Link>
          </div>
        </div>
    </div>
  )
}

export default Footer