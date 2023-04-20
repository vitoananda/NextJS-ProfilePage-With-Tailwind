import Image from 'next/image';
import avatar from '../public/avatar with bg.svg'
import {BsArrowRightCircleFill} from 'react-icons/bs';
export default function Cards(){
    return(
        <div className='h-full px-10 pt-5 pb-2 mt-32 mb-0 bg-ylw rounded-lg '  data-aos="fade-up"
        data-aos-duration="1000" >
            <p className='mx-5 mb-5 mt-10 font-bold text-3xl text-white'>Services I Offer</p>
        <div class="container py-2 mx-auto flex flex-wrap">
     <div class="h-full p-4 lg:w-1/3">
       <div class="transform bg-lbl px-8 pt-16 pb-16  h-96 drop-shadow-md transition duration-500 hover:scale-105 rounded-md">
         <h2 class="text-xs mb-1 text-white">Graphic Design</h2>
         <h1 class="title-font sm:text-2xl text-xl  mb-3 text-white font-medium">Design Commissions</h1>
         <p class="mb-3 text-white">Banner Design, Merchandise Design, Instagram Feed Design</p>
       </div>
     </div>
     <div class="h-full p-4 lg:w-1/3">
       <div class="transform bg-lbl px-8 pt-16 pb-16  h-96 drop-shadow-md transition duration-500 hover:scale-105 rounded-md ">
         <h2 class="text-xs mb-1 text-white">Graphic Design</h2>
         <h1 class="title-font sm:text-2xl text-xl  mb-3 text-white">Ennui Snackwave Thundercats</h1>
         <p class="mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         <a class="text-indigo-500 inline-flex items-center text-white">Learn More</a>
       </div>
     </div>
     <div class="h-full p-4 lg:w-1/3 text-white">
       <div class="transform bg-lbl px-8 pt-16 pb-16  h-96 drop-shadow-md transition duration-500 hover:scale-105 rounded-md">
         <h2 class="text-xs mb-1 text-white">CATEGORY</h2>
         <h1 class="title-font sm:text-2xl text-xl mb-3 text-white">Selvage Poke Waistcoat</h1>
         <p class="mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         <a class="text-indigo-500 inline-flex items-center text-white">Learn More</a>
       </div>
     </div>
   </div>
   <a target='_blank' href="https://www.fiverr.com/users/vitoananda">
   <div className='container py-5 px-5 mx-0 min-w-full grid place-items-center'>
   <button class="transform flex items-center space-x-5 p-5 bg-rd rounded-md drop-shadow-md transition duration-500 hover:scale-105">
   <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2.5 -2 24 24"><g fill="white"><path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"/><circle cx="14.375" cy="1.875" r="1.875"/></g></svg>
   <span className='font-medium text-lg text-white'>My Fiverr Account</span>
   <BsArrowRightCircleFill className='fill-white '/>
    </button>
    </div>
    </a>

   
   </div>
    )
}