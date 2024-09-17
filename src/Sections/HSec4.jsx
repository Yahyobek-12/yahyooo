import { Link } from 'react-router-dom'
import agreementImg from '../images/agreement.jpg'

const HSec4 = () => {
  return (
    <div className="w-[100%] sm:h-[70vh] h-[55vh] flex items-center justify-center bg-white rounded-t-2xl border-2 shadow-xl sm:mt-0 mt-4">
      <div className="w-[50%] sm:h-[50%] h-[100%]">
        <div className='w-[100%] flex justify-center'>
          <img src={agreementImg} alt="agree" className='w-[150px] h-[150px] rounded-full shadow-lg' />
        </div>
        <h3 className='text-center mt-5 uppercase sm:text-3xl text-xl font-bold'>tell me about your next project</h3>
        <div className='flex mt-8 w-[100%] justify-evenly'>
          <Link to="/" className='py-3 px-6 bg-gradient-to-tl from-greens to-kok border-b-2 border-slate-500 text-white rounded-lg hover:opacity-85'>Telegram</Link>
        </div>
      </div>
    </div>
  )
}

export default HSec4