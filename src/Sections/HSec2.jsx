import { Link } from 'react-router-dom'
import nikeImg from '../images/macos-big-sur-stock-cold-winter-sedimentary-rocks-night-2820x2820-3767.jpg'
import blueImg from '../images/macos-sonoma-6016x6016-11574.jpeg'
import darkImg from '../images/maxim-berg-3E2xgrlNXq4-unsplash.jpg'

const HSec2 = () => {
  return (
    <div className="w-[100%] ss:h-[80vh] h-[85vh] px-4 xl:mt-0 lg:mt-64 md:mt-24 ss:mt-6 mt-2">
        <h1 className="md:text-5xl text-3xl font-bold md:ml-14 ml-6 uppercase">Latest <br /> <p className="ml-12 md:text-3xl text-xl text-gray-500">projects</p></h1>

        <div className="w-[100%] h-[60vh] lg:flex block items-center justify-between md:px-12 sm:px-4 px-2 mt-4">

            <div id='projects-card' className="xl:w-[39%] lg:w-[400px] w-[100%] md:h-[400px] h-[200px] rounded-lg bg-gradient-to-tl from-slate-500 to-slate-900 border-spacing-80 shadow-lg lg:mb-0 mb-2">
              <img src={nikeImg} alt="portfolio" />
            </div>

            <div className='xl:w-[60%] lg:w-[55%] w-[100%] ss:h-[400px] h-[300px] rounded-lg'>

              <div id='projects-card' className='w-[100%] h-[195px] rounded-lg shadow-lg'>
                <img src={blueImg} alt="portfolio" />
              </div>

              <div className='w-[100%] ss:h-[195px] h-[100px] flex items-center justify-between mt-2 shadow-lg'>

                <div id='projects-card' className='w-[49.5%] h-[100%] rounded-lg shadow-lg'>
                  <img src={darkImg} alt="portfolio" />
                </div>

                <div id='projects-card' className='w-[49.5%] h-[100%] rounded-lg flex items-center justify-center bg-gradient-to-bl from-slate-600 to-black shadow-lg hover:opacity-90'>
                  <Link to="/projects" className='text-white sm:text-3xl text-xl font-bold'>View More</Link>
                </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default HSec2
