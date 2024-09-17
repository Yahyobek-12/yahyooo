import JoinUs from '../images/join Us.png'
import { Link } from 'react-router-dom'

const HSec3 = () => {
  return (
    <div className="w-[100%] h-[100vh] py-10 px-10">
        <h1 className="text-7xl font-bold mr-24 text-end">Join <span className='text-slate-600'>Us</span></h1>
        <div className='w-[100%] h-[90%] flex items-center justify-center'>
          <img src={JoinUs} alt="join-us" className='w-[750px]' />
        </div>
        <div className='w-[100%] h-[100px] flex items-center justify-center mt-[-5rem]'>
          <Link to="/" className='py-2 px-6 bg-gradient-to-bl from-slate-400 to-black rounded-md text-white hover:opacity-85 border-b-[5px] border-black active:border-none active:mt-1'>Join Now</Link>
        </div>
    </div>
  )
}

export default HSec3