import logo from '../public/vito ananda logo white.svg'
import Image from 'next/image';


export default function NavBar(){
    return(
        <div className='py-10 mb-20 flex md:flex md:flex-grow flex-row justify-end xl:mx-32 sm:mx-10' >
              <a  target="_blank" href="https://drive.google.com/file/d/1jOxtiwRfIiEb_ssewikoMh05e7xhYfjI/view?usp=sharing" className='transform text-xl text-white cursor-pointer bg-rd px-5 py-2 rounded-md drop-shadow-md transition duration-500 hover:scale-105 font-medium justify-end'>Resume</a>
          </div>
    )
}