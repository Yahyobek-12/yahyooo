import '../Styles/Home.css'
import Who from '../images/data-team.webp'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import HSec1 from '../Sections/HSec1';
import HSec2 from '../Sections/HSec2';
import HSec3 from '../Sections/HSec3';

const Home = () => {
  return (
    <div className="home">
      <div className="home-page">
        <div className="home-page-in px-4">
          <h3 className='w-[165px] text-md py-[5px] px-[10px] bg-gradient-to-l from-gray-100 to-blue-500 rounded-md text-white border-b-2 border-blue-500 animate-pulse'>Hello everyone 👋</h3>
          <h1 className='md:text-9xl text-5xl font-bold mt-4 title animate__animated animate__fadeIn'>Yahyobek <span className='opacity-85'>Ergashboyev</span></h1>
          <h4 className='ml-4 font-semibold mt-4 text-3xl text-end animate__animated animate__fadeInDown'>Frontend web <span className='text-slate-500'>developer.</span></h4>
          <h5 className='text-start mb-4 text-xl max-w-[455px] font-bold animate__animated animate__zoomIn'>Mening yoshim 16 da va men hozirda andijonda yashayman <span className='text-blue-500'>Frontend</span> web developer...</h5>
          <Link to="/"><button className='py-2 px-8 bg-black text-white rounded-md hover:bg-slate-800 flex items-center animate__animated animate__fadeIn '>Read more <FaLongArrowAltRight className='ml-4 about-icon' /></button></Link>
        </div>
      </div>
      <h3 className='scroll-h'>scroll</h3>
      <HSec1 />
      <HSec2 />
      <HSec3 />
    </div>
  )
}

export default Home