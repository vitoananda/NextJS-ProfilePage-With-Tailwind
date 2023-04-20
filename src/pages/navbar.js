import logo from '../public/vito ananda logo white.svg'
import Image from 'next/image';

// const links = [
//     {
//         id:1,
//         link: 'home'
//     },
//     {
//         id:2,
//         link: 'works'
//     },
//     {
//         id:3,
//         link: 'contact'
//     }
// ]

export default function NavBar(){
    return(
        <nav className='py-10 mx-20 mb-12 px-25 flex justify-between space-x-5'>
            
            <div className='px-2 py-2 bg-rd rounded-full drop-shadow-md' >
            <Image className='h-7 w-7 fill-rd' src={logo}/>
            </div>
              <a target="_blank" href="https://drive.google.com/file/d/1jOxtiwRfIiEb_ssewikoMh05e7xhYfjI/view?usp=sharing" className='transform text-xl text-white cursor-pointer bg-rd px-5 py-2 rounded-md drop-shadow-md transition duration-500 hover:scale-105 font-medium'>Resume</a>
          </nav>
    )
}