import { Link } from 'react-router-dom'
import '../Styles/About.css'
import aboutWork from '../images/about-work.jpg'
import { PiShareFatLight } from "react-icons/pi";


const About = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <div className="w-[100%] sm:h-[50%] h-[40%] flex items-center justify-center">
        <h1 className="sm:text-9xl ss:text-7xl text-6xl about mt-20">About Me</h1>
      </div>
      <div className='w-[100%] bg-white lg:px-24 md:px-12 px-4 py-8 border-t-2 border-gray-300 rounded-t-[50px]'>
        <h1 className='text-3xl font-bold'>Yahyobek Ergashboyev</h1>
        <p className='mt-4 sm:text-[20px] ss:text-[18px] text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae voluptatem omnis? Amet recusandae non eveniet minima. Deleniti impedit enim commodi pariatur vero laborum odio, suscipit nostrum, et voluptatibus similique unde repudiandae aspernatur soluta dolores quas illum sit sequi. Maiores voluptate cum cumque vitae quisquam magni optio, consequuntur voluptatibus provident totam officiis ullam recusandae, mollitia facilis nesciunt expedita odit. Ut culpa beatae, soluta nostrum officiis eveniet. Quaerat quis itaque, voluptatum distinctio laudantium vero quidem. Quibusdam, aut ipsam optio, amet illum eum similique voluptates rem perferendis architecto aperiam saepe culpa ullam minus asperiores, deserunt iusto eligendi eaque sapiente fuga assumenda libero! Fugiat adipisci distinctio vero architecto cumque. Sint nesciunt dicta excepturi in nisi, illo minus dolorem odit ipsa quae vel fuga perferendis laborum voluptas quia quas atque ipsum tempore consequuntur nam. Provident numquam earum culpa autem blanditiis? Eveniet, hic atque. Nihil sunt asperiores voluptatibus voluptate voluptas dolorem aliquam sit dolores nobis.</p>
        <div className='w-[100%] sm:h-[200px] h-[120px] bg-gray-200 rounded-lg mt-8 border-2 border-blue-500 border-dashed flex items-center justify-center hover:scale-[99%]'>
          <Link to='' target='_blank' className='sm:text-3xl ss:text-xl text-md flex items-center'>You can find more about me <PiShareFatLight className='ml-4 py-[5px] px-[4xp] bg-blue-500 text-white rounded-full' /></Link>
        </div>

        <div className='mt-12 mb-12'>
          <h3 className='text-2xl mb-6'>About work</h3>
          <img src={aboutWork} alt="about-work" className='w-[100%] lg:h-[800px] md:h-[650px] sm:h-[500px] ss:h-[350px] h-[300px] object-cover mt-4 rounded-xl shadow-xl' />
        </div>
        <Link to='/projects' className='py-3 px-4 bg-gradient-to-bl from-black to-slate-500 text-white rounded-lg border-b-2 border-black hover:opacity-85'>See Projects</Link>
      </div>
    </div>
  )
}

export default About