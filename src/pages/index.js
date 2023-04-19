import Image from 'next/image';
import avatar from '../public/avatar with bg.svg'
import logo from '../public/vito ananda logo white.svg'
import Head from 'next/head';
import {BsDownload,BsLinkedin, BsInstagram,BsGithub} from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';



import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

const variants = {
  hidden: {opacity:0},
  visible: {opacity:1, transition: {type:"tween",duration:1}}
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vito Rizqi Ananda Personal Website</title>
        
      </Head>
      <main className='bg-white bg-cover'>
        {/* navbar */}
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-around px-0'>
            <div className='px-2.5 py-2.5 bg-rd rounded-full drop-shadow-md' >
            <Image className='h-7 w-7 fill-rd' src={logo}/>
            </div>
            <a className='cursor-pointer'  href="../public/CV_Vito Rizqi Ananda.png" download></a>
          <ul className='flex items-center  bg-rd px-5 py-1 rounded-md drop-shadow-md'>
          <li>
              <BsDownload className='text-xl cursor-pointer mr-4 text-white'/>
            </li>
            <li>
              <a className='text-xl text-white' href="#">Resume</a>
            </li>
  
          </ul>
          
          </nav>
          {/* main page */}
      
<section className='h-full max-h-[640px] mb-8 xl:mb-24 px-10'>
  <div className='flex flex-col lg:flex-row'>
    <div className='lg:ml-8 xl:ml-[150px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1
    px-4 lg:px-0'>
      <motion.h2
       variants={variants}
       initial="hidden"
       animate="visible" 
       className='font-bold text-5xl text-lbl pb-5'>Vito Rizqi Ananda</motion.h2>
       <motion.div 
       variants={variants}
       initial="hidden"
       animate="visible" >
        <TypeAnimation
      sequence={[
          'Developer',
          2000,
          'Graphic Designer',
          2000
        ]}
        speed={50}
        wrapper='span'
        className='pb-1 text-xl'
        repeat={Infinity}
      />
       </motion.div>
      
          <motion.p
          variants={variants}
          initial="hidden"
          animate= {{opacity:1, transition: { type:"tween", duration:1.5}}}
           className='pb-4 text-gray'>
                a freelancer offering programming and design services
            </motion.p>
            <motion.ul
            variants={variants}
            initial="hidden"
            animate={{opacity:1, transition: {duration:1.75}}} 
             className='flex items-center text-3xl'>
          <li>
          <a href="https://www.linkedin.com/in/vito-rizqi-ananda/"><BsLinkedin className='mr-4 cursor-pointer'/></a>
            </li>
            <li>
            <a href="https://www.instagram.com/vitoanandq/"><BsInstagram className='mr-4 cursor-pointer'/></a>
            </li>
            <li>
            <a href="https://github.com/vitoananda"><BsGithub className='mr-4 cursor-pointer'/></a>
            </li>
          </motion.ul>   
    </div>
    <motion.div
    variants={variants}
    initial="hidden"
    animate="visible" 
     className='hidden flex-1 lg:flex justify-end items-end'>
                 <Image className='' src={avatar}/>
               </motion.div>
  </div>
        </section>
        </section>
        
     </main>
    </div>
    
  )
}
