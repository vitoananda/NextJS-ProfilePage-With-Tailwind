import Head from 'next/head';
import NavBar from './navbar';
import Banner from './banner';
import Cards from './cards';
import Works from './works';
import { motion } from "framer-motion"

function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
      return scrollYProgress.on('change', (latestValue) => {
          if (latestValue > 0.5) {
              controls.start('show');
          } else {
              controls.start('hide');
          }
      });
  });

  return (
      <motion.button
          className="fixed bottom-0 right-0 p-10"
          variants={ScrollToTopContainerVariants}
          initial="hide"
          animate={controls}
          onClick={scrollToTop}>
          <FaArrowUp />
      </motion.button>
  );
}

export default function Home() {
  return (
    <div>
        <Head>
      <meta charset = "utf-8" />
      <link rel="shortcut icon" type="x-icon" href="vito ananda logo white.png"/>
        <title>Vito Rizqi Ananda Personal Website</title>
        
       
        
      </Head>
      
      <div>
      <div>
      <main className='bg-white bg-cover'>
        {/* navbar */}
        <section className='min-h-screen'>
          <NavBar/>
          {/* main page */}
          <Banner  className='mb-0' />
          <Cards/>
        
        </section>
     </main>
    </div>
      </div>
    
    </div>
   
  )
}

