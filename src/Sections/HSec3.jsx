import JoinUs from '../images/8161040.jpg'
import { Link } from 'react-router-dom'

const HSec3 = () => {
  return (
    <div className="w-[100%] lg:h-[100vh] md:h-[80vh] h-[100vh] lg:py-10 py-4 lg:px-10 px-4 lg:mt-0 md:mt-80 ss:mt-40 mt-4">
       <div className='w-[100%] h-[100%] rounded-lg relative shadow-xl community md:flex block items-center justify-around bg-white py-2 px-4'>
        <div>
          <h1 className='lg:text-7xl text-5xl'>Join <span style={{ color: '#59E4A8' }}>Us</span></h1>
          <p className='lg:max-w-[500px] md:max-w-[400px] max-w-[600px] md:mb-10 mb-6 mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et cumque, voluptatum quaerat in velit libero architecto <i className='text-greens'>Our community</i> sint aut ducimus quo iste quasi hic nesciunt minima voluptas cum illo? Nisi quasi minus eaque veritatis saepe blanditiis esse, est sint.</p>
          <Link to='https://t.me/yahyoo_12' target='_blank' className='py-2 px-8 bg-gradient-to-tr from-black to-slate-500 text-lg rounded-lg text-white border-b-2 border-black hover:opacity-85'>Join now</Link>
        </div>
        <img src={JoinUs} alt="team" className='lg:w-[45%] md:w-[40%] lg:h-[80%] md:h-[70%] w-[100%] h-[60%] object-cover md:mt-0 mt-6' />
       </div>
    </div>
  )
}

export default HSec3