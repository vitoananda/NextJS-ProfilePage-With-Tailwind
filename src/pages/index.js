import Image from 'next/image';
import avatar from '../public/avatar-vector.png'
import logo from '../public/vito ananda logo white.svg'
import Head from 'next/head';
import {BsDownload,BsLinkedin, BsInstagram} from 'react-icons/bs';


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vito Rizqi Ananda Personal Website</title>
      </Head>
      <main className='bg-white bg-cover'>
        <section className=''>
          <nav className='py-10 mb-12 flex justify-between px-10'>
            <div className='px-2 py-2 fill-black bg-rd rounded-full drop-shadow-md' >
            <Image className='h-7 w-7' src={logo}/>
            </div>
            <a className='cursor-pointer'  href="../public/CV_Vito Rizqi Ananda.png" download>
          <ul className='flex items-center  bg-rd px-3 py-1 rounded-md drop-shadow-md'>
          <li>
              <BsDownload className='cursor-pointer mr-2 text-white'/>
            </li>
            <li>
              <a className='text-lg text-white' href="#">Resume</a>
            </li>
  
          </ul>
          </a>
          </nav>
          <div className='text-center'>
            <h2 className='font-bold text-4xl text-lbl pb-2'>Vito Rizqi Ananda</h2>
            <h3 className='pb-4'>Developer and Graphic Designer.</h3>
            <p className='pb-4 text-gray'>
            a freelancer offering programming and design skills
            </p>
           <div className='text-3xl flex justify-center gap-1'>
            <a href="https://www.linkedin.com/in/vito-rizqi-ananda/"><BsLinkedin className='mr-4 cursor-pointer'/></a>
            <a href="https://www.instagram.com/vitoanandq/"><BsInstagram className='mr-4 cursor-pointer'/></a>
           </div>
           <div className='relative mx-auto pt-10 w-80 h-80'>
            <Image className='' src={avatar}/>
           </div>
          </div>
          <div className='bg-rd bg-fill mt-2 p-5'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit adipisci ipsum maiores soluta eligendi accusantium voluptatum tenetur, tempora, distinctio reiciendis laborum quis earum reprehenderit? Reprehenderit qui facilis unde necessitatibus?</p>

          </div>
         
        </section>
     </main>
    </div>
    
  )
}
