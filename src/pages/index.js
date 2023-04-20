import Head from 'next/head';


import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import NavBar from './navbar';
import Banner from './banner';
import Cards from './cards';



export default function Home() {
  return (
    <div>
        <Head>
      <meta charset = "utf-8" />
        <title>Vito Rizqi Ananda Personal Website</title>
        <link rel='shortcut icon' href='/favicon/favicon.ico'/>
       
        
      </Head>
      
      <div>
      <div>
      <main className='bg-white bg-cover'>
        {/* navbar */}
        <section className='min-h-screen'>
          <NavBar/>
          {/* main page */}
          <Banner/>
          <Cards/>
        </section>
     </main>
    </div>
      </div>
    
    </div>
   
  )
}

