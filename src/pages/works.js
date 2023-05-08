import Image from 'next/image';
import avatar from '../public/avatar with bg.svg'
import {BsArrowRightCircleFill} from 'react-icons/bs';
import {DiPhotoshop, DiIllustrator, DiReact} from 'react-icons/di'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTailwindcss, SiFlutter} from 'react-icons/si'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {RiFlutterFill} from 'react-icons/ri'

export default function Works(){
    return(
        <section className='h-full px-10 pt-5 pb-2 mt-6 mb-0 bg-white '  data-aos="fade-up"
        data-aos-duration="1000" >
            <p className='mx-5 mb-5 mt-10 font-bold text-4xl text-softblck'>Services</p>
        <div class="container pr-2 mx-auto flex flex-wrap">
     <div class="h-full p-4 lg:w-1/3 mb-8">
       <div class="transform bg-ylw px-8 pt-16 h-128 drop-shadow-md transition duration-500 hover:scale-105 rounded-md">
         <h2 class="text-xs mb-1 text-white">Graphic Design</h2>
         <h1 class="title-font sm:text-2xl text-sm  mb-3 text-white font-semibold">Basic Design Commissions</h1>
         <p class="mb-3 text-white text-justify tracking-tight">I offer Basic Design Commissions such as banner design, merchandise design, and Instagram feed design. These projects involve creating visually compelling graphics that serve specific purposes, like attracting potential customers or creating a cohesive brand identity</p>
         <h2 class="text-xs mb-1 text-white">Tools Used :</h2>
         <div className='flex flex-row space-x-3'>
         <DiPhotoshop className='text-4xl mb-10 fill-white'/>
         <DiIllustrator className='text-4xl mb-10 fill-white'/>
         </div>
       </div>
     </div>
     <div class="h-full p-4 lg:w-1/3">
       <div class="transform bg-ylw px-8 pt-16 h-128 drop-shadow-md transition duration-500 hover:scale-105 rounded-md ">
         <h2 class="text-xs mb-1 text-white">Graphic Design</h2>
         <h1 class="title-font sm:text-2xl text-xl  mb-3 text-white font-semibold">Logo Design Commissions</h1>
         <p class="mb-10 text-white text-justify tracking-tight">I specialize in creating logos that reflect your brand's identity and values. Whether you're starting a new business or looking to refresh your existing branding, I can deliver a custom logo design that will make you stand out in a competitive market</p>
         <h2 class="text-xs mb-1 text-white">Tools Used :</h2>
         <DiIllustrator className='text-4xl mb-10 fill-white'/>
       </div>
     </div>
     <div class="h-full p-4 lg:w-1/3 text-white">
       <div class="transform bg-ylw px-8 pt-16 h-128 drop-shadow-md transition duration-500 hover:scale-105 rounded-md">
         <h2 class="text-xs mb-1 text-white">Software Development</h2>
         <h1 class="title-font sm:text-2xl text-xl mb-3 text-white font-medium">Development Commissions</h1>
         <p class="mb-9 text-white text-justify tracking-tight">I can develop visually appealing and user-friendly interfaces by fusing my design and programming expertise. I have the ability to create a front-end that offers a fluid user experience across all platforms, including responsive layouts and interactive components.</p>
         <h2 class="text-xs mb-1 text-white">Tools Used :</h2>
         <div className='flex space-x-3'>
         <TbBrandNextjs className='text-4xl mb-10 '/>
         <DiReact className='text-4xl mb-10 fill-white'/>
         <SiTailwindcss className='text-4xl mb-10 fill-white'/>
         <RiFlutterFill className='text-4xl fill-white'/>
         </div>
       </div>
     </div>
   </div>
   <a target='_blank' href="https://www.fiverr.com/users/vitoananda">
   <div className='container py-5 px-5 mx-0 min-w-full grid place-items-center'>
   <button class="w-52 transform flex items-center space-x-5 p-5 bg-softblck rounded-md drop-shadow-md transition duration-500 hover:scale-105">
   <svg className="fill-white ml-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2.5 -2 24 24"><g fill="white"><path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"/><circle cx="14.375" cy="1.875" r="1.875"/></g></svg>
   <span className='font-semibold text-lg text-white'>Hire Me!</span>
    </button>
    </div>
    </a>

   
   </section>
    )
}