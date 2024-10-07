import { Link } from 'react-router-dom'
import agreementImg from '../../images/agreement.jpg'

const HSec4 = () => {
  return (
    <div className="w-[100%] sm:h-[70vh] h-[55vh] flex items-center justify-center agree-bg bg-white sm:mt-0 mt-4 rounded-t-[50px] border-t-2 border-gray-300">
      <div className="w-[50%] sm:h-[50%] h-[100%] ss:mt-0 mt-6">
        <div className='w-[100%] flex justify-center'>
          <img src={agreementImg} alt="agree" className='w-[150px] h-[150px] rounded-full shadow-xl' />
        </div>
        <h3 className='text-center mt-5 uppercase sm:text-3xl text-xl font-bold'>tell me about your next project</h3>
        <div className='flex mt-8 w-[100%] justify-evenly'>
          <Link to="https://t.me/yahyoo_12" target='_blank' className='py-3 px-6 bg-gradient-to-tl from-greens to-kok text-white rounded-lg hover:opacity-85 active:mt-2 border-b-2 border-green-600'>Contact me</Link>
        </div>
      </div>
    </div>
  )
}

export default HSec4